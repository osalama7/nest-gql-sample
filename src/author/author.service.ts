import { Injectable, Inject } from '@nestjs/common';
import { Author } from './../generated/graphql';
import { PrismaService } from './../prisma.service';

@Injectable()
export class AuthorsService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
  private readonly authors: Author[] = [
    { id: 1, firstName: 'Jon', lastName: 'Snow' },
    { id: 2, firstName: 'Daenerys', lastName: 'Targaryen' },
    { id: 3, firstName: 'Tyrion', lastName: 'Lannister' },
    { id: 4, firstName: 'Arya', lastName: 'Stark' },
    { id: 5, firstName: 'Sansa', lastName: 'Stark' },
  ];

  async findOneById(id: number): Promise<Author | null> {
    return this.prismaService.author.findUnique({
      where: { id },
    });
  }

  findAll(): Author[] {
    console.log('Fetching all authors');
    return this.authors;
  }
}
