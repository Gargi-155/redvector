from pydantic import BaseModel


class EvaluationRequest(BaseModel):
    provider: str
    prompt: str
    attack_type: str