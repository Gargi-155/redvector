from app.services.model_manager import ModelManager

from app.services.providers.mock_provider import (
    MockProvider
)

manager = ModelManager()

manager.register(
    "mock",
    MockProvider()
)