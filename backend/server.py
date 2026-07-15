import os
import json
from typing import List, Optional
from datetime import datetime
from uuid import uuid4
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="Memory Companion API", version="1.0.0")

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development ease
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Constants & Paths
MEMORY_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "memory"))
DB_FILE = os.path.join(MEMORY_DIR, "database.json")

# Model definitions
class MemoryModel(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid4()))
    text: str
    category: str = "General"
    importance: int = Field(default=1, ge=1, le=5) # 1 to 5 stars
    created_at: str = Field(default_factory=lambda: datetime.utcnow().isoformat())

class MemoryCreate(BaseModel):
    text: str
    category: Optional[str] = "General"
    importance: Optional[int] = 1

# Helpers to load/save database
def init_db():
    os.makedirs(MEMORY_DIR, exist_ok=True)
    if not os.path.exists(DB_FILE):
        default_memories = [
            {
                "id": str(uuid4()),
                "text": "Welcome to your Memory Companion! You can store code snippets, reminders, and thoughts here.",
                "category": "Guide",
                "importance": 5,
                "created_at": datetime.utcnow().isoformat()
            },
            {
                "id": str(uuid4()),
                "text": "Remember to run 'pytest' to verify the backend test suite.",
                "category": "Tasks",
                "importance": 4,
                "created_at": datetime.utcnow().isoformat()
            }
        ]
        save_db(default_memories)

def read_db() -> List[dict]:
    init_db()
    try:
        with open(DB_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []

def save_db(data: List[dict]):
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

# API Endpoints
@app.get("/api/memories", response_model=List[MemoryModel])
def get_memories():
    return read_db()

@app.post("/api/memories", response_model=MemoryModel)
def create_memory(mem: MemoryCreate):
    db = read_db()
    new_memory = MemoryModel(
        text=mem.text,
        category=mem.category or "General",
        importance=mem.importance or 1
    )
    db.append(new_memory.model_dump())
    save_db(db)
    return new_memory

@app.delete("/api/memories/{memory_id}")
def delete_memory(memory_id: str):
    db = read_db()
    updated_db = [m for m in db if m["id"] != memory_id]
    if len(db) == len(updated_db):
        raise HTTPException(status_code=404, detail="Memory not found")
    save_db(updated_db)
    return {"status": "success", "message": "Memory deleted successfully"}

if __name__ == "__main__":
    import uvicorn
    # Auto-initialize database on launch
    init_db()
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)
