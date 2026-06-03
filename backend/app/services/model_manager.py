from app.services.providers.openai_provider import (
    OpenAIProvider
)

from app.services.providers.ollama_provider import (
    OllamaProvider
)


class ModelManager:

    def __init__(self):

        self.providers = {}

    def register(
        self,
        name,
        provider
    ):

        self.providers[name] = provider

    def get_provider(
        self,
        name
    ):

        return self.providers[name]