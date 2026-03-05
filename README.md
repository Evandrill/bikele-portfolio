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

## Déployer sur Render (procédure complète)

### 1) Pré-requis

- Le repo est poussé sur GitHub.
- Un **MySQL compatible** est disponible (Render fournit surtout Postgres ; pour MySQL utilise un provider externe : PlanetScale/TiDB/Aiven/etc.).
- Les paramètres OAuth (portail + app) autorisent l’URL de callback de production.

### 2) Créer le service Render

1. Render → **New** → **Web Service**
2. Connecte ton repo GitHub `bikele-portfolio`
3. **Environment** : `Node`
4. **Build Command** :

```bash
corepack enable && pnpm install --frozen-lockfile && pnpm build
```

5. **Start Command** :

```bash
pnpm start
```

Render injecte automatiquement `PORT`; le serveur l’utilise déjà.

### 3) Configurer les variables d’environnement sur Render

Render → Service → **Environment** → ajoute (au minimum) :

- `DATABASE_URL` (MySQL) : ex `mysql://USER:PASSWORD@HOST:3306/DBNAME`
- `JWT_SECRET` : une valeur longue et aléatoire
- `OAUTH_SERVER_URL`
- `OWNER_OPEN_ID`
- `BUILT_IN_FORGE_API_URL` (si utilisé côté serveur)
- `BUILT_IN_FORGE_API_KEY` (si utilisé côté serveur)

Et pour le **build Vite** (frontend), ajoute aussi :

- `VITE_OAUTH_PORTAL_URL`
- `VITE_APP_ID`
- `VITE_FRONTEND_FORGE_API_URL` (optionnel)
- `VITE_FRONTEND_FORGE_API_KEY`

Important : les variables `VITE_*` sont lues au moment du `pnpm build`. Si tu les ajoutes après le premier déploiement, déclenche un **redeploy**.

### 4) Configurer l’OAuth (indispensable pour le login)

- L’URL de callback attendue est : `https://<ton-service-render>.onrender.com/api/oauth/callback`
- Si tu utilises un domaine custom : `https://<ton-domaine>/api/oauth/callback`

Assure-toi que ton provider/portail OAuth autorise ces URLs (callback + éventuellement “allowed origins”).

### 5) Initialiser / migrer la base de données

Après que `DATABASE_URL` est bien configurée :

- Lance une commande de migration (selon ton workflow) :

```bash
pnpm db:push
```

Sur Render, fais-le via un **one-off job** / shell du service (ou depuis ta machine en pointant vers la même `DATABASE_URL`).

### 6) Déploiement & vérifications

- Déclenche un déploiement (Render le fait automatiquement après push).
- Vérifie que l’app répond sur l’URL Render.
- Teste :
  - chargement de la home (assets servis)
  - login OAuth (redirect → callback → retour)
  - contact form (si `notifyOwner` dépend d’un service externe, vérifie sa config)

### 7) (Optionnel) Domaine & HTTPS

- Ajoute un domaine custom dans Render.
- Mets à jour les paramètres OAuth (callback/origins) pour le domaine.
