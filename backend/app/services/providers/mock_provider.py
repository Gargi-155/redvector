class MockProvider:
    name = "mock"

    async def generate(self, prompt: str):
        return {
            "provider": self.name,
            "response": f"Mock response for: {prompt}"
        }