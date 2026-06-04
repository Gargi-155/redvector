from fastapi import FastAPI

from app.api.prompts import router as prompt_router
from app.api.models import router as model_router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title="RedVector API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(prompt_router)
app.include_router(model_router)


@app.get("/")
async def root():
    return {
        "message": "RedVector Backend Running"
    }