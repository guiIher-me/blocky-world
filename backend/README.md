# Backend

This backend runs with Node.js, MongoDB, and Redis. The simplest way to start everything is with Docker Compose.

## Requirements

- Docker and Docker Compose
- Node.js 18+ and npm

## How to run

1. Go to the backend folder:

```bash
cd backend
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Start the backend, MongoDB, and Redis with Docker:

```bash
npm install
npm run start-docker
```

The API will be available on `https://localhost:3001`.

## Stop the project

```bash
npm run stop-docker
```

## Useful commands

Run tests:

```bash
npm test
```

Run the server locally in development mode:

```bash
npm run dev
```

Note: local development also requires MongoDB, Redis, the `.env` file, and the HTTPS certificate files referenced by `HTTPS_KEY` and `HTTPS_CERT`.
