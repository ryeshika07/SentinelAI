from fastapi import APIRouter
from app.schemas.health import HealthResponse
from app.services.health_service import get_health_status

router = APIRouter()


@router.get("/", response_model=dict)
def read_root():
    return {"message": "SentinelAI API is running"}


@router.get("/health", response_model=HealthResponse)
def health_check():
    return get_health_status()