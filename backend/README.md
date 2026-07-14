# FastAPI Backend Stub

## What it does
- accepts `multipart/form-data` at `POST /api/chat`
- expects a required `message` field
- accepts optional repeated `files` fields
- returns a text-only JSON response in the shape:

```json
{
  "reply": "..."
}
```

## Local run

Install dependencies:

```bash
pip install -r backend/requirements.txt
```

Start the backend:

```bash
python -m uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

## Frontend connection notes
- The frontend expects the backend base URL to be `http://127.0.0.1:8000` by default.
- You can override that later with `VITE_API_BASE_URL`.
- The integration point for real model/backend work is in `backend/main.py` inside the `/api/chat` route.
