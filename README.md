# EntGamers Database

EntGamers Database is a library to unify Sessions & Database

- [EntGamers Database](#entgamers-database)
  - [Installation](#installation)
  - [Development](#development)
    - [Install](#install)
    - [Create a Migration](#create-a-migration)
    - [Publish a Version](#publish-a-version)
  - [Usage](#usage)
    - [Environment Variables](#environment-variables)
    - [Usage In Development](#usage-in-development)
    - [Usage In Production](#usage-in-production)



## Installation

```bash
npm install entgamers-database
```
Or
```bash
yarn add entgamers-database
```
Or
```bash
pnpm add entgamers-database
```
Or
```bash
bun add entgamers-database
```

## Development

### Install

```bash
bun install
```

### Create a Migration	

```bash
bun run prisma:migrate:dev --name <migration_name>
```

### Publish a Version

To publish a version you must create a tag in your Git repository.

## Usage

### Environment Variables

To use EntGamers Database in projects you must set the following environment variables:

- **`DATABASE_URL`** - Database URL
- **`NEXT_PUBLIC_APPWRITE_ENDPOINT`** - Appwrite endpoint, since the
- **`NEXT_PUBLIC_APPWRITE_PROJECT_ID`**
- **`APPWRITE_API_KEY`** - Appwrite API key

Since in the community all websites are made with NextJs we apply their convention to make the required environment variables public to be accessed from the frontend.

### Usage In Development

```json
// package.json
 "scripts": {
  "prisma:generate": "prisma generate --schema=./node_modules/entgamers-database/prisma/schema.prisma",
  "prisma:db:push": "prisma db push --schema=./node_modules/entgamers-database/prisma/schema.prisma",
  "prisma:migrate:reset": "prisma migrate reset --schema=./node_modules/entgamers-database/prisma/schema.prisma",
 }
// ...
```
where:

- `prisma:generate` - Generate Prisma Client
- `prisma:db:push` - Push Prisma schema state to development database
- `prisma:migrate:reset` - Reset database to the latest migration state

### Usage In Production

```json
// package.json
 "scripts": {
  "prisma:generate": "prisma generate --schema=./node_modules/entgamers-database/prisma/schema.prisma",
  "prisma:migrate:deploy": "prisma migrate deploy --schema=./node_modules/entgamers-database/prisma/schema.prisma",
 }
// ...
```
where:

- `prisma:generate` - Generate Prisma Client for production
- `prisma:migrate:deploy` - Deploy Prisma schema state to production database
