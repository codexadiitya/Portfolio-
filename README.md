# Memory Companion Application

A full-stack, premium developer log and memory vault application featuring a FastAPI Python backend and a React Tailwind CSS frontend.

## Project Structure

```text
app/
├── backend/            # Python API Server
│   ├── pytest.ini
│   ├── requirements.txt
│   └── server.py
├── frontend/           # React Frontend App
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── tailwind.config.js
├── memory/             # Local database JSON storage
├── tests/              # Backend Test Suite
│   └── test_server.py
```

## Running the Application

### 1. Run the Backend Server
```bash
cd backend
pip install -r requirements.txt
python server.py
```
The server will start at [http://127.0.0.1:8000](http://127.0.0.1:8000).

### 2. Run the Frontend Client
```bash
cd frontend
npm install
npm start
```
The frontend application will start at [http://localhost:3000](http://localhost:3000).

### 3. Run Backend Tests
To execute unit tests:
```bash
cd backend
pytest
```
