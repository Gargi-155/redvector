from pydantic import BaseModel


class PromptRequest(BaseModel):
    attack_type: str