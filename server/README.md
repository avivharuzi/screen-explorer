# Screen Explorer Server

Node.js server API.

## NPM Commands

Build project files.

```bash
npm run build
```

Watch project files.

```bash
npm run watch
```

Lint project files.

```bash
npm run lint
```

Lint and Fix project files.

```bash
npm run lint-and-fix
```

Start development server.

```bash
npm run start:dev
```

Start production server.

```bash
npm run start:prod
```

## Docker Commands

Development build.

```bash
docker-compose up -d
```

Production build.

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```