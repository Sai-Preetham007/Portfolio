import httpx

from app.config import settings


def notify_new_contact(name: str, email: str, message: str) -> None:
    if not settings.resend_api_key or not settings.contact_notify_to:
        return

    body = (
        f"New portfolio contact\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n\n"
        f"{message}"
    )
    httpx.post(
        "https://api.resend.com/emails",
        headers={
            "Authorization": f"Bearer {settings.resend_api_key}",
            "Content-Type": "application/json",
        },
        json={
            "from": settings.contact_notify_from,
            "to": [settings.contact_notify_to],
            "subject": f"Portfolio contact from {name}",
            "text": body,
        },
        timeout=10.0,
    )
