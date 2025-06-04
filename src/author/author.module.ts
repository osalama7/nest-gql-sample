import { Module } from '@nestjs/common';
import { AuthorsService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AuthorsService, AuthorResolver, PrismaService],
  exports: [AuthorsService],
})
export class AuthorsModule {}
