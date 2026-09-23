from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)
    website: str | None = Field(default=None, max_length=200)


class ContactCreated(BaseModel):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}


class ContactListItem(BaseModel):
    id: int
    name: str
    email: EmailStr
    message: str
    created_at: datetime
    status: str
    source: str

    model_config = {"from_attributes": True}
