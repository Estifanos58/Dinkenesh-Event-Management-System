# Dinkenesh Event Management System (DEMS)

## 1. Project Title and Description

DEMS is a full-stack event management platform for discovering events, purchasing tickets, running organizer operations, handling staff/security check-in, and processing moderation and appeals.

This repository includes:
- `frontend/`: React + Vite single-page app.
- `backend/`: Express REST API with Prisma ORM.
- `database/`: SQL snapshots/patches kept for reference.

## 2. System Requirements

Install the following on the instructor machine before setup:

| Component | Version | Purpose |
| --- | --- | --- |
| Git | 2.34+ | Clone and manage repository |
| Node.js | 18.18+ (20 LTS recommended) | Run backend and frontend |
| npm | 9+ | Install JavaScript dependencies |
| PostgreSQL | 14+ | Primary application database |
| Redis | 7+ (optional) | Optional cache/queue experiments |
| Browser | Latest Chrome/Firefox/Edge | Run frontend UI |

Framework/runtime versions currently used in code:
- React 19.2.4
- Vite 8.0.4
- Express 5.2.1
- Prisma 7.7.0

## 3. Detailed Setup Instructions (Getting Started)

### Step 1: Clone the repository

```bash
git clone https://github.com/Estifanos58/Dinkenesh-Event-Management-System.git
cd Dinkenesh-Event-Management-System
```

### Step 2: Install dependencies

Install backend packages:

```bash
cd backend
npm install
```

Install frontend packages:

```bash
cd ../frontend
npm install
```

### Step 3: Configure environment variables

Backend:

```bash
cd ../backend
cp .env.example .env
```

Frontend: create `frontend/.env` and add:

```env
VITE_API_URL=http://localhost:5000/api
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UPLOAD_PRESET=
VITE_GOOGLE_MAPS_API_KEY=
```

### Step 4: Initialize the database

1. Create a PostgreSQL database named `dems_db` (or update `DATABASE_URL` to your DB name).
2. From `backend/`, apply Prisma schema to your PostgreSQL instance:

```bash
npm run prisma:validate
npx prisma db push
npm run prisma:generate
```

3. Optional demo data seed:

```bash
npm run seed:demo
```

### Step 5: Launch the application

Start backend (Terminal 1):

```bash
cd backend
npm run dev
```

Start frontend (Terminal 2):

```bash
cd frontend
npm run dev
```

App URLs:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health check: http://localhost:5000/health

## 4. Current Feature Status (Mid-Project Submission)

### Fully implemented

- [x] Authentication (register/login) with JWT and role checks.
- [x] Event discovery, filtering, featured listing, and event detail pages.
- [x] Organizer workflows: create/manage events and staff assignments.
- [x] Ticket purchase flow with payment initialization/verification.
- [x] QR-based ticket scan/check-in with duplicate-scan prevention.
- [x] Rating and comment system (reviews + organizer reply support).
- [x] Moderation reports, bans, and appeals (organizer/admin decisions).
- [x] Admin workflows: organizer approvals and admin dashboard stats.
- [x] CSV export endpoints for organizer and admin analytics.
- [x] Notification retrieval/read flows and template-based email service.

### Planned / in-progress

- [ ] Automated test coverage (Jest is configured, but test files are not yet present).
- [ ] Redis-backed runtime cache/queue flow (`backend/config/redis.js` is scaffolded/empty).
- [ ] Scheduled moderation maintenance jobs (not wired as active runtime jobs).
- [ ] CI/CD pipeline and containerized runtime profile documentation.

## 5. Dependency Management

### JavaScript/Node dependency manifests

Use and submit these manifests:
- `backend/package.json`
- `frontend/package.json`

Do not include `node_modules` in submissions.

### Environment variable template

Backend example file:
- `backend/.env.example`

If sharing template files publicly, keep secret values blank.

## 6. Code Quality and Standards

This project is organized around clean-code principles:

- Modularity: backend is split into routes, controllers, middleware, services, and utils; frontend is split into pages, components, contexts, api, and utils.
- Naming conventions: descriptive names are used for modules, functions, and variables (for example: `getOrganizerStats`, `exportAdminDashboardCsv`, `scanTicket`).
- Validation and error handling: request validation middleware plus centralized error handling are in place in backend.
- Internal documentation: concise comments are used for non-obvious logic, and contributors should keep function-level purpose/inputs/outputs documented.

Documentation standard for new contributions:
- Every new class (if introduced) should include a short purpose comment.
- Every exported function should include a short description of inputs, output, and important logic decisions.

## 7. Repository Structure

```text
.
├─ backend/        # Express API, Prisma schema, controllers, routes, services
├─ frontend/       # React application
├─ database/       # SQL assets and schema references
├─ Instruction.md
├─ Presentation.md
└─ README.md
```

## 8. Script Reference

Backend (`backend/package.json`):
- `npm run dev`
- `npm run start`
- `npm run test`
- `npm run seed:demo`
- `npm run prisma:validate`
- `npm run prisma:generate`
- `npm run prisma:format`
- `npm run prisma:pull`
- `npm run prisma:studio`
- `npm run prisma:studio:open`

Frontend (`frontend/package.json`):
- `npm run dev`
- `npm run build`
- `npm run seo:sitemap`
- `npm run lint`
- `npm run preview`

## 9. License

MIT
