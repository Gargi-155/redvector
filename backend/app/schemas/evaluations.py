from pydantic import BaseModel


class EvaluationRequest(BaseModel):
    provider: str
    prompt: str