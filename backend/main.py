from typing import Annotated

from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="GPT Front API")

# For local development, the Vite frontend runs on localhost:5173.
# When you deploy a real backend, replace or extend this list with your
# production frontend origin(s).
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5173",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def healthcheck() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/chat")
async def chat(
    message: Annotated[str, Form(...)],
    files: Annotated[list[UploadFile], File()] | None = None,
) -> dict[str, str]:
    uploaded_files = files or []
    file_names = [file.filename for file in uploaded_files if file.filename]

    # This is the handoff point for your real backend logic.
    # Replace the stubbed reply below with your own orchestration, for example:
    # 1. persist the inbound message and uploaded files
    # 2. forward message/file references to your model or agent layer
    # 3. return the model's text response as {"reply": "..."}
    #
    # Keep the response shape stable if you want the existing frontend
    # integration to keep working without changes.
    if file_names:
        reply = (
            f"I received your message and {len(file_names)} file(s): "
            + ", ".join(file_names)
            + ". Replace this stub with your real assistant response."
        )
    else:
        reply = (
            "I received your message. Replace this FastAPI stub with your real "
            "assistant pipeline when you're ready."
        )

    return {"reply": reply}
