# Aditya Diwan — Developer Portfolio (2026)

A dark editorial, bold typographic personal portfolio website built with React, Tailwind CSS, Framer Motion, and Lenis.

## License & Copyright

⚠️ **Proprietary & Confidential**

All rights reserved. The code, designs, and content in this repository are proprietary. **No license is granted for open-source use, redistribution, or modification.**

---

## Project Structure

```text
app/
├── backend/            # Python API Server
│   ├── pytest.ini
│   ├── requirements.txt
│   └── server.py
├── frontend/           # React Frontend App
│   ├── src/
│   │   ├── components/  # Page sections (Hero, About, Projects, etc.)
│   │   ├── data/        # portfolio.js (Profile details and data)
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── tailwind.config.js
```

---

## Getting Started

### 1. Build the Frontend
To compile the static production build:
```bash
cd frontend
npm install --legacy-peer-deps
npm run build
```

### 2. Run Locally in Development Mode
To start the hot-reloading development server:
```bash
cd frontend
npm start
```
The preview will open automatically at [http://localhost:3000](http://localhost:3000).
