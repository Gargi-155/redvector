from app.services.model_manager import ModelManager

from app.services.providers.mock_provider import (
    MockProvider
)

from app.services.providers.ollama_provider import (
    OllamaProvider
)

manager = ModelManager()

manager.register(
    "mock",
    MockProvider()
)

manager.register(
    "ollama",
    OllamaProvider()
)