from fastapi import APIRouter

from app.core.providers import manager

router = APIRouter()


@router.get("/models")
def list_models():

    return {
        "models": list(
            manager.providers.keys()
        )
    }