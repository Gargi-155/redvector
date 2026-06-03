import httpx

from app.services.providers.base import (
    BaseProvider
)


class OllamaProvider(BaseProvider):

    async def generate(
        self,
        prompt: str
    ) -> str:

        async with httpx.AsyncClient() as client:

            response = await client.post(
                "http://localhost:11434/api/generate",
                json={
                    "model": "llama3",
                    "prompt": prompt,
                    "stream": False
                }
            )

            data = response.json()

            return data["response"]