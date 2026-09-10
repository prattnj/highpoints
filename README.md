# highpoints

A PWA for tracking progress toward the highest point and the most prominent point in
all 50 US states, along with state visits, overnight stays, and capital visits.

## Features

- **Map tab** — a clickable US map with two views. "All goals" colors each state by
  progress (gray = never visited, yellow = visited, orange = overnight, red = high point,
  green = overnight + high point), with four shades per color for the capital and
  prominence-point modifiers. Single-goal views highlight completed states in blue.
  Clicking a state shows peak details, coordinates, PeakBagger links, and quick logging.
- **Info tab** — a searchable reference of every state's capital, high point, and
  prominence point (elevation, prominence, coordinates, PeakBagger links).
- **Logs tab** — record the date, companions, and notes for each milestone. Dates are
  optional; entries without one display as "Childhood". Entries can be edited and deleted.
- **Shared peaks** — in the 25 states where the high point is also the prominence point,
  logging either goal counts for both.
- **Multi-user** — open self-registration (rate-limited), bcrypt-hashed passwords,
  long-lived JWT session cookies. Each user's data is private.
- **PWA** — installable, with an offline-cached app shell.

## Stack

- **Client:** React + TypeScript + Vite + Tailwind CSS v4 + Font Awesome (`client/`)
- **Server:** Node 20+ / Express 5 on port 3000, serving both the API and the built
  client (`server/`)
- **Storage:** plain JSON files in `server/data/` (gitignored) — no database needed

## Running it

```bash
npm run install:all   # install client + server deps
npm run build         # build the client into client/dist
npm start             # serve everything on http://localhost:3000
```

For development with hot reload:

```bash
npm start             # API on :3000 (terminal 1)
npm run dev           # Vite dev server with /api proxy (terminal 2)
```

## Deploying with Docker

The production server runs in a container behind a TLS-terminating reverse
proxy. The image is a multi-stage build — the client is compiled inside
Docker, so the host only needs Docker itself.

```bash
export PORT_HIGHPOINTS=3000   # host port (usually set system-wide)
docker compose up -d --build
```

- The host port comes from the `PORT_HIGHPOINTS` env var; the container
  always listens on 3000 internally.
- All user data is bind-mounted to `./data` next to the compose file —
  back up that directory to back up everything.
- The container runs as the unprivileged `node` user (uid 1000). If Docker
  pre-creates `./data` as root, fix it once with `chown -R 1000:1000 data`.
- With `NODE_ENV=production` (set in the image) the session cookie is
  `Secure`, so the app must be reached over HTTPS via the reverse proxy.
  Point the proxy at the mapped host port.


## Data layout

- `server/data/users.json` — usernames and bcrypt password hashes
- `server/data/userdata/<username>.json` — each user's settings and log entries
- `server/data/jwt-secret` — auto-generated on first run

Back up `server/data/` to back up everything.
