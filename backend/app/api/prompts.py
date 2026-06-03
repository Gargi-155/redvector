from fastapi import APIRouter

from app.schemas.evaluations import EvaluationRequest
from app.core.providers import manager

router = APIRouter()


@router.post("/evaluate")
async def evaluate(request: EvaluationRequest):

    provider = manager.get_provider(
        request.provider
    )

    result = await provider.generate(
        request.prompt
    )

    return result