# Bikele Portfolio

Portfolio full‑stack : frontend **Vite + React** servi par un backend **Node.js + Express** (tRPC).  
Le formulaire de contact envoie un email via **SMTP**.

**Auteur : Evandrill**

## Stack

- Frontend : Vite, React, Tailwind CSS
- Backend : Node.js, Express, tRPC
- Email : Nodemailer (SMTP)
- Tests : Vitest

## Prérequis

- Node.js
- pnpm

## Installation

```bash
pnpm install
```

## Configuration (.env)

Copie `.env.example` en `.env` et remplis les valeurs :

- `SMTP_HOST`
- `SMTP_PORT` (défaut : `587`)
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM` (optionnel)
- `CONTACT_EMAIL` (destinataire)

## Développement

```bash
pnpm dev
```

Ouvre `http://localhost:3000` (ou le prochain port disponible si `3000` est occupé).

## Build & production

```bash
pnpm build
pnpm start
```

## Qualité

```bash
pnpm check
pnpm test
pnpm format
```

## Licence

MIT
