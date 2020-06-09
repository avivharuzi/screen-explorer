# Screen Explorer Client

Angular Application.

## Commands

Serve project in development.

```bash
npm start
```

Format project.

```bash
npm run format
```

Format project with watch mode.

```bash
npm run format:watch
```

Lint project.

```bash
npm run lint
```

Test project.

```bash
npm test
```

Test project without watching files.

```bash
npm run test:without-watch
```

E2E project.

```bash
npm run e2e
```

Analyze project.

```bash
npm run analyze
```

Build project for production.

```bash
npm run build:prod
```

Build project for production with Angular Universal (SSR).

```bash
npm run build:ssr
```

Build project for production with Prerender.

```bash
npm run prerender
```

## Using Docker in Production

Run docker for production.

```bash
docker-compose -f docker-compose-prod.yml up --build
```

Run docker for production with Angular Universal (SSR).

```bash
docker-compose -f docker-compose-ssr.yml up --build
```

> NOTE: There are many ways to use Docker files in production environment please be careful with the way you are using it.
