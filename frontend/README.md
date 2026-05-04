# Frontend

This frontend uses Webpack and runs a local HTTPS development server.

## Requirements

- Node.js 18+ and npm
- Local HTTPS certificate files available at the paths used in `.env`

## How to run

1. Go to the frontend folder:

```bash
cd frontend
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Install dependencies and start the development server:

```bash
npm install
npm start
```

The app will be available on `https://localhost:8080`.

## Environment

The frontend reads `PUBLIC_API_URL` from `.env` to connect to the backend.

Example:

```env
PUBLIC_API_URL=http://localhost:3001
```

## Build for production

```bash
npm run build
```

Note: the frontend startup will fail if the certificate files configured in `PROTECTED_HTTPS_KEY` and `PROTECTED_HTTPS_CERT` do not exist.
