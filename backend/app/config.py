from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    database_url: str = "postgresql+psycopg2://portfolio:portfolio@localhost:5432/portfolio"
    cors_origins: str = "http://localhost:3001,http://127.0.0.1:3001"
    admin_api_key: str | None = None
    resend_api_key: str | None = None
    contact_notify_to: str | None = None
    contact_notify_from: str = "onboarding@resend.dev"

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


settings = Settings()
