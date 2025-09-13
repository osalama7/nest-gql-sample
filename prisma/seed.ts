import { PrismaClient, Prisma } from './../src/generated/prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.AuthorCreateInput[] = [
  {
    firstName: 'Alice',
    lastName: 'Smith',
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
  },
  {
    firstName: 'Charlie',
    lastName: 'Brown',
  },
  {
    firstName: 'David',
    lastName: 'Williams',
  },
  {
    firstName: 'Eve',
    lastName: 'Davis',
  },
];

const subjectData: Prisma.SubjectCreateInput[] = [
  {
    title: 'Deployment strategy',
    content: 'This discussion covers deployment strategies for APIs and web apps.',
  },
  {
    title: 'Mobile apps',
    content:
      'This topic explores the development and design of mobile applications.',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.author.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  for (const s of subjectData) {
    const subject = await prisma.subject.create({
      data: s,
    });
    console.log(`Created subject with id: ${subject.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
