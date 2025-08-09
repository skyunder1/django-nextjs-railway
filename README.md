# Django + Next.js Full-Stack on Railway

Full-stack application with Django REST API backend and Next.js frontend, both deployed on Railway.

## Architecture

- **Backend**: Django REST Framework API
- **Frontend**: Next.js 14 with App Router
- **Deployment**: Railway (separate services)

## Endpoints

### Backend API
- `/api/hello/` - Test endpoint
- `/api/items/` - Sample items list

### Frontend Routes
- `/` - Main page showing API integration

## Local Development

### Backend
```bash
cd backend
pip install -r requirements.txt
python manage.py runserver 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Railway Deployment

Both services are configured for automatic deployment on Railway with proper CORS and environment variable configuration.