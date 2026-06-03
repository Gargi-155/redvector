from fastapi import APIRouter

from app.generators.prompt_generator import (
    get_jailbreak_prompts
)

router = APIRouter()


@router.get("/prompts")
def get_prompts():
    return {
        "prompts": get_jailbreak_prompts()
    }