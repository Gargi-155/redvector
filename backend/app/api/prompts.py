from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.prompt_request import PromptRequest
from app.schemas.evaluations import EvaluationRequest

from app.generators.prompt_generator import PromptGenerator

from app.database.database import get_db
from app.database.crud import save_evaluation

from app.core.providers import manager
from app.database.crud import (
    save_evaluation,
    get_evaluations,
    get_stats,
    get_recent_evaluations
)

router = APIRouter()

generator = PromptGenerator()

@router.get("/evaluations")
def evaluations(
    db: Session = Depends(get_db)
):
    return get_evaluations(db)


@router.post("/generate-prompts")
def generate_prompts(request: PromptRequest):

    prompts = generator.generate(
        request.attack_type
    )

    return {
        "attack_type": request.attack_type,
        "prompts": prompts
    }


@router.post("/evaluate")
async def evaluate(
    request: EvaluationRequest,
    db: Session = Depends(get_db)
):

    provider = manager.get_provider(
        request.provider
    )

    result = await provider.generate(
        request.prompt
    )

    save_evaluation(
        db=db,
        provider=request.provider,
        attack_type=request.attack_type,
        prompt=request.prompt,
        response=result["response"]
    )

    return result

@router.get("/stats")
def stats(
    db: Session = Depends(get_db)
):
    return get_stats(db)

@router.get("/recent-evaluations")
def recent_evaluations(
    db: Session = Depends(get_db)
):
    return get_recent_evaluations(db)