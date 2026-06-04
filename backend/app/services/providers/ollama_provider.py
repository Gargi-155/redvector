import requests


class OllamaProvider:

    name = "ollama"

    async def generate(
        self,
        prompt: str
    ):

        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "phi3:mini",
                "prompt": prompt,
                "stream": False
            }
        )

        data = response.json()

        return {
            "provider": self.name,
            "response": data["response"]
        }