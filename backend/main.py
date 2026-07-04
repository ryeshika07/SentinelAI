import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="SentinelAI API")

allowed_origin = os.getenv("ALLOWED_ORIGIN", "http://localhost:5173")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[allowed_origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "SentinelAI API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok", "service": "SentinelAI backend"}