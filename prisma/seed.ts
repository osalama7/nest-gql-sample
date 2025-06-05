import { PrismaClient, Prisma } from './../generated/prisma/client';

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
    title: 'Introduction to Programming',
    content: 'This course covers the basics of programming using Python.',
  },
  {
    title: 'Advanced Database Systems',
    content:
      'This course explores advanced topics in database management systems.',
  },
  {
    title: 'Web Development Fundamentals',
    content:
      'Learn the fundamentals of web development including HTML, CSS, and JavaScript.',
  },
  {
    title: 'Machine Learning Basics',
    content: 'An introduction to machine learning concepts and algorithms.',
  },
  {
    title: 'Data Science with Python',
    content:
      'This course teaches data science techniques using Python libraries.',
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
