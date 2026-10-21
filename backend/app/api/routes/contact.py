import time
from collections import defaultdict
from datetime import datetime, timezone
from threading import Lock

from fastapi import APIRouter, Depends, Header, HTTPException, Request
from sqlalchemy.orm import Session

from app.config import settings
from app.db.session import get_db
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate, ContactCreated, ContactListItem
from app.services.email import notify_new_contact

router = APIRouter(tags=["contact"])

# ponytail: in-memory rate limit; resets on process restart; use Redis if you scale out
_rate: dict[str, list[float]] = defaultdict(list)
_rate_lock = Lock()
_RATE_WINDOW_SEC = 3600
_RATE_MAX = 5


def _check_rate_limit(client_ip: str) -> None:
    now = time.time()
    with _rate_lock:
        hits = [t for t in _rate[client_ip] if now - t < _RATE_WINDOW_SEC]
        if len(hits) >= _RATE_MAX:
            raise HTTPException(status_code=429, detail="Too many requests. Try again later.")
        hits.append(now)
        _rate[client_ip] = hits


@router.post("/api/v1/contact", response_model=ContactCreated, status_code=201)
def create_contact(
    payload: ContactCreate,
    request: Request,
    db: Session = Depends(get_db),
) -> ContactCreated:
    if payload.website:
        return ContactCreated(id=0, created_at=datetime.now(timezone.utc))

    client_ip = request.client.host if request.client else "unknown"
    _check_rate_limit(client_ip)

    row = ContactMessage(
        name=payload.name.strip(),
        email=payload.email.strip().lower(),
        message=payload.message.strip(),
    )
    db.add(row)
    db.commit()
    db.refresh(row)

    try:
        notify_new_contact(row.name, row.email, row.message)
    except Exception:
        pass

    return row


@router.get("/api/v1/contact", response_model=list[ContactListItem])
def list_contacts(
    db: Session = Depends(get_db),
    x_admin_key: str | None = Header(default=None, alias="X-Admin-Key"),
) -> list[ContactMessage]:
    if not settings.admin_api_key or x_admin_key != settings.admin_api_key:
        raise HTTPException(status_code=401, detail="Unauthorized")

    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).limit(100).all()
