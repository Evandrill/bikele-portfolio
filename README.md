# Bikele Portfolio

Portfolio full‑stack (client React + API Node) avec un serveur Express qui intègre Vite en mode dev et sert des fichiers statiques en production.

**Auteur : Evandrill**

## Stack

- Frontend : Vite + React, Tailwind CSS
- Backend : Node.js + Express, tRPC
- DB : Drizzle ORM (connexion via `DATABASE_URL`)
- Tests : Vitest

## Prérequis

- Node.js (recommandé : 20+)
- pnpm

## Installation

```bash
pnpm install
```

## Variables d’environnement

Crée un fichier `.env` à la racine.

### Backend (Node)

- `DATABASE_URL` : URL de connexion DB (utilisée aussi par Drizzle)
- `JWT_SECRET` : secret des cookies/session
- `OAUTH_SERVER_URL` : URL du serveur OAuth
- `OWNER_OPEN_ID` : identifiant OpenID du propriétaire (notifications)
- `BUILT_IN_FORGE_API_URL` : base URL Forge (proxy maps)
- `BUILT_IN_FORGE_API_KEY` : clé API Forge
- `PORT` : port (défaut : `3000`)
- `NODE_ENV` : `development` / `production`

### Frontend (Vite)

- `VITE_OAUTH_PORTAL_URL` : URL du portail OAuth
- `VITE_APP_ID` : App ID OAuth
- `VITE_FRONTEND_FORGE_API_URL` : base URL Forge (optionnel)
- `VITE_FRONTEND_FORGE_API_KEY` : clé API Forge (frontend)

## Développement

Lance le serveur Express + Vite (middleware) :

```bash
pnpm dev
```

Ouvre ensuite `http://localhost:3000` (ou le prochain port disponible si `3000` est pris).

## Build & production

```bash
pnpm build
pnpm start
```

## Base de données (Drizzle)

```bash
pnpm db:push
```

## Qualité

```bash
pnpm check
pnpm test
pnpm format
```

## Licence

MIT

## Publier sur GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```
