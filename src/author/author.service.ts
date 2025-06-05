import { Injectable, Inject } from '@nestjs/common';
import { Author } from './../generated/graphql';
import { PrismaService } from './../prisma.service';

@Injectable()
export class AuthorsService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
  async findOneById(id: number): Promise<Author | null> {
    return this.prismaService.author.findUnique({
      where: { id },
    });
  }

  async findAll() {
    console.log('Fetching all authors');
    return this.prismaService.author.findMany();
  }
}
