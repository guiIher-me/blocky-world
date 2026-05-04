# Blocky World

An interactive three-dimensional blocky world inspired by Minecraft.

## Local setup

This project uses local HTTPS for both frontend and backend. The recommended setup uses `mkcert` and a shared gitignored certificate directory at `.local-certs/`.

### Requirements

- Node.js 18+
- npm
- Docker and Docker Compose
- `mkcert`

Install `mkcert` on your machine, then run:

```bash
npm run setup
```

The setup command will:

- create missing `.env` files for `backend` and `frontend`
- install the local CA with `mkcert`
- generate local HTTPS certificates
- install frontend and backend dependencies

## Run the project

After setup, start everything from the repository root:

```bash
npm start
```

- Frontend: `https://localhost:8080`
- Backend: `https://localhost:3001`

## Notes

- If certificates are missing, rerun `npm run setup`.
- Backend Docker and frontend local development both use the same certificate files from `.local-certs/`.
- For `mkcert` installation details and the WSL/Windows browser trust fix, see [MKCERT.md](./docs/MKCERT.md).
