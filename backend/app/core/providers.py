from app.services.model_manager import ModelManager

from app.services.providers.ollama_provider import (
    OllamaProvider
)

manager = ModelManager()

manager.register(
    "ollama",
    OllamaProvider()
)