import { Module } from '@nestjs/common';
import { AuthorsService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PrismaService } from '../prisma.service';
import { PrismaModule } from '../prisma.module';
@Module({
  providers: [PrismaService, AuthorsService, AuthorResolver],
  exports: [AuthorsService],
  imports: [PrismaModule],
})
export class AuthorsModule {}
