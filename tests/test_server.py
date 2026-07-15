import os
import json
import pytest
from fastapi.testclient import TestClient

# Mock the database environment
os.environ["TESTING"] = "True"

from backend.server import app, DB_FILE

client = TestClient(app)

@pytest.fixture(autouse=True)
def run_around_tests():
    # Setup: Clean or backup database before test
    db_backup = None
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, "r", encoding="utf-8") as f:
                db_backup = json.load(f)
        except Exception:
            pass
        os.remove(DB_FILE)
    
    yield
    
    # Teardown: Restore backup
    if db_backup is not None:
        with open(DB_FILE, "w", encoding="utf-8") as f:
            json.dump(db_backup, f, indent=4)
    elif os.path.exists(DB_FILE):
        os.remove(DB_FILE)

def test_get_memories_initial():
    response = client.get("/api/memories")
    assert response.status_code == 200
    data = response.json()
    # Should contain the two default initial memories
    assert len(data) == 2
    assert data[0]["category"] == "Guide"

def test_create_memory():
    payload = {
        "text": "This is a test memory integration code.",
        "category": "Test",
        "importance": 3
    }
    response = client.post("/api/memories", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["text"] == payload["text"]
    assert data["category"] == payload["category"]
    assert data["importance"] == payload["importance"]
    assert "id" in data

    # Verify get retrieves it
    get_res = client.get("/api/memories")
    assert len(get_res.json()) == 3

def test_delete_memory():
    # First get existing
    get_res = client.get("/api/memories")
    items = get_res.json()
    assert len(items) > 0
    target_id = items[0]["id"]

    # Delete
    del_res = client.delete(f"/api/memories/{target_id}")
    assert del_res.status_code == 200
    assert del_res.json()["status"] == "success"

    # Verify deletion
    get_res2 = client.get("/api/memories")
    assert len(get_res2.json()) == len(items) - 1
