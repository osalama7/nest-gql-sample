import { Injectable, Inject } from '@nestjs/common';
import { Author } from './../generated/graphql';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorsService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
  async findOneById(id: number): Promise<Author | null> {
    return this.prismaService.extendedPrismaClient().author.findUnique({
      where: { id },
    });
  }

  async findAll() {
    console.log('Fetching all authors');
    return this.prismaService.extendedPrismaClient().author.findMany();
  }

  async findOneByName(
    firstName: string,
    lastName: string,
  ): Promise<Author | null> {
    return this.prismaService.extendedPrismaClient().author.findFirstOrThrow({
      where: { firstName, lastName },
    });
  }
}
