# Backend

This backend runs with Node.js, MongoDB, and Redis. Local HTTPS certificates are shared with the frontend through the repository root `.local-certs/` directory.

## Requirements

- Docker and Docker Compose
- Node.js 18+ and npm
- `mkcert`

## How to run

Run the project setup once from the repository root:

```bash
npm run setup
```

Then start the backend from the repository root:

```bash
npm run start-backend
```

Or run it from inside the backend folder:

```bash
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

Run the server locally without Docker:

```bash
npm run dev
```

## Notes

- `npm run setup` creates `backend/.env` from `.env.example` if it does not exist.
- HTTPS certificates are stored in the repository root `.local-certs/` directory.
- If the cert files are missing, rerun `npm run setup` from the repository root.
