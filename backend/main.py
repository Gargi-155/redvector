from fastapi import FastAPI

from app.api.prompts import router as prompt_router
from app.api.models import router as model_router

app = FastAPI(
    title="RedVector API",
    version="1.0.0"
)

app.include_router(prompt_router)
app.include_router(model_router)


@app.get("/")
async def root():
    return {
        "message": "RedVector Backend Running"
    }