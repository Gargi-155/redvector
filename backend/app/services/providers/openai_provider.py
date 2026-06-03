from openai import AsyncOpenAI

from app.services.providers.base import (
    BaseProvider
)


class OpenAIProvider(BaseProvider):

    def __init__(self, api_key: str):

        self.client = AsyncOpenAI(
            api_key=api_key
        )

    async def generate(
        self,
        prompt: str
    ) -> str:

        response = await self.client.responses.create(
            model="gpt-4o",
            input=prompt
        )

        return response.output_text