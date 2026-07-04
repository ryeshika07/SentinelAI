import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    ALLOWED_ORIGIN: str = os.getenv("ALLOWED_ORIGIN", "http://localhost:5173")


settings = Settings()