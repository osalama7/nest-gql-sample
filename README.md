# NestJS GraphQL Sample

A starter repository for building efficient, scalable server-side applications with [NestJS](https://nestjs.com/), [GraphQL](https://graphql.org/), and [Prisma](https://www.prisma.io/).

---

## Project Setup

```bash
npm install
```

## Development

Start the development server:

```bash
npm run start:dev
```

## Production Build

```bash
npm run build
npm run start:prod
```

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

---

## Database & Prisma

### 1. Start PostgreSQL with Docker

```bash
docker-compose up -d
```

### 2. Configure Database

Edit `.env` if needed. Default:

```
DATABASE_URL="postgresql://nestuser:nestpass@localhost:5432/nestgql?schema=public"
```

### 3. Run Prisma Migrations

```bash
npm exec prisma migrate deploy
```

### 4. Generate Prisma Client

```bash
npm exec prisma generate
```

---

## GraphQL Code Generation

This project uses [GraphQL Code Generator](https://www.graphql-code-generator.com/) to generate TypeScript types and resolvers from your GraphQL schema.

### 1. Update the GraphQL Schema

Edit [`schema.graphql`](schema.graphql) as needed.

### 2. Generate Types

```bash
npm run codegen
```

This will generate types in [`src/generated/graphql.ts`](src/generated/graphql.ts).

---

## Using Prisma Client

You can use the generated Prisma Client in your services. Example:

```typescript
import { PrismaService } from '../prisma.service';

@Injectable()
export class ExampleService {
  constructor(private prisma: PrismaService) {}

  async getAuthors() {
    return this.prisma.author.findMany();
  }
}
```

---

## Useful Commands

- **Format code:**  
  `npm run format`
- **Lint code:**  
  `npm run lint`

---

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [GraphQL Code Generator Docs](https://www.graphql-code-generator.com/docs/getting-started/)

---

## License

UNLICENSED