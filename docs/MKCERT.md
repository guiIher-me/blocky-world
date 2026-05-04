# mkcert Setup

This project uses `mkcert` to create local HTTPS certificates for:

- `https://localhost:8080` on the frontend
- `https://localhost:3001` on the backend

The generated certificate files are stored in the repository root `.local-certs/` directory.

## Install on WSL Ubuntu

If you are running the project from WSL Ubuntu, install `mkcert` inside WSL:

```bash
sudo apt update
sudo apt install -y mkcert libnss3-tools
mkcert -install
```

Then run the project setup:

```bash
npm run setup
```

## WSL and Windows browsers

If you run the project inside WSL but open `https://localhost:8080` in a Windows browser such as Opera, Chrome, or Edge, the browser may still mark the connection as unsafe.

That usually happens because:

- `mkcert -install` trusted the local CA inside WSL/Linux
- the Windows browser uses the Windows trust store
- Windows does not automatically trust the CA created inside WSL

In this case, the generated site certificate can be valid and still appear unsafe in the browser.

## Fix Opera or other Windows browsers

1. In WSL, find the `mkcert` CA directory:

```bash
mkcert -CAROOT
```

2. In that directory, locate:

```bash
rootCA.pem
```

3. Import `rootCA.pem` into Windows as a trusted root certificate.

Suggested Windows path:

- open `certmgr.msc`
- go to `Trusted Root Certification Authorities`
- open `Certificates`
- import `rootCA.pem`

4. Fully close and reopen Opera.

## Troubleshooting

If the browser still shows the connection as unsafe:

- make sure you are opening `https://localhost:8080`
- restart the frontend dev server after regenerating certificates
- rerun `npm run setup`
- confirm the cert files exist in `.local-certs/`

If the browser error is `NET::ERR_CERT_AUTHORITY_INVALID`, the most likely issue is Windows not trusting the WSL `mkcert` CA yet.
