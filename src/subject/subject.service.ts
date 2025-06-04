import { Injectable } from '@nestjs/common';
import { Subject } from '../generated/graphql';

@Injectable()
export class SubjectsService {
  private readonly subjects: Subject[] = [
    {
      id: 1,
      title: 'Introduction to GraphQL',
      content: "A beginner's guide to GraphQL",
    },
    {
      id: 2,
      title: 'Advanced GraphQL Techniques',
      content: 'Deep dive into GraphQL features',
    },
    {
      id: 3,
      title: 'GraphQL Best Practices',
      content: 'Best practices for GraphQL development',
    },
    {
      id: 4,
      title: 'GraphQL and TypeScript',
      content: 'Using GraphQL with TypeScript',
    },
    {
      id: 5,
      title: 'GraphQL Performance Optimization',
      content: 'Optimizing GraphQL queries for performance',
    },
  ];

  findOneById(id: number): Subject | undefined {
    return this.subjects.find((subject) => subject.id === id);
  }

  findAll(): Subject[] {
    console.log('Fetching all subjects');
    return this.subjects;
  }

  createOne(subject: Subject): Subject {
    const newSubject = { ...subject, id: this.subjects.length + 1 };
    this.subjects.push(newSubject);
    return newSubject;
  }
}
