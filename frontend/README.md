# Frontend

This frontend uses Webpack and runs a local HTTPS development server with certificates shared from the repository root `.local-certs/` directory.

## Requirements

- Node.js 18+ and npm
- `mkcert`

## How to run

Run the project setup once from the repository root:

```bash
npm run setup
```

Then start the frontend from the repository root:

```bash
npm run start-frontend
```

Or run it from inside the frontend folder:

```bash
npm start
```

The app will be available on `https://localhost:8080`.

## Environment

The frontend reads `PUBLIC_API_URL` from `.env` to connect to the backend.

Example:

```env
PUBLIC_API_URL=https://localhost:3001
```

## Build for production

```bash
npm run build
```

## Notes

- `npm run setup` creates `frontend/.env` from `.env.example` if it does not exist.
- The frontend reads certificates from `../.local-certs/`.
- If the certificate files are missing, rerun `npm run setup` from the repository root.
