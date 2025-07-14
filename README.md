## Codebase Description

**Backend:** Django (Python) REST API, located in `backend/`

- Uses Django REST Framework
- Default database: SQLite (`db.sqlite3`)
- Main entry: `manage.py`

**Frontend:** React + TypeScript + Vite, located in `frontend/`

- Uses Vite for development/build
- Main entry: `frontend/src/`

---

## How to Run

### Prerequisites

- Python 3.8+ (for backend)
- Node.js 18+ and npm (for frontend)

### Backend (Django API)

```sh
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install django djangorestframework
```

### To run the server after a new change is made and packages are installed:

```
This ensures your database schema is up to date with your code changes.
```

```sh
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

The API will be available at http://127.0.0.1:8000/

### Frontend (React App)

```sh
cd frontend
npm i
npm i bootstrap
```

```
To run your react application:
```

```sh
npm run dev
```