# BurnCall App - 🚧 In construction 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Preparando banco de dados com Docker

### 1 - Criar MySQL no Docker

```bash
docker run --name mysql-burn-call -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest

```

### 2 - Rodando migrations
```bash
npx prisma migrate dev

```
⚠️ - *Obs.: Antes de rodar as migrations conferir se a pasta `prisma/migrations/` foi deletada e se o arquivo `/prisma/dev.db`.

## Preparando banco de dados com PlanetScale
### 1 - Executar migrations no PlanetScale
```bash
npx prisma db push
```

⚠️ - *Obs.: Antes de rodar o `push` você precisa rodar as migrations localmente, pois o PlanetScale não suporta gerar as migrations apenas fazer uma "cópia" das existentes.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
