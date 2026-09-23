from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import contact, health
from app.config import settings

app = FastAPI(title="Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(contact.router)
