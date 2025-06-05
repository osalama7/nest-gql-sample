import { Module } from '@nestjs/common';
import { SubjectsService } from './subject.service';
import { SubjectResolver } from './subject.resolver';
import { PrismaService } from './../prisma.service';

@Module({
  providers: [SubjectsService, SubjectResolver, PrismaService],
  exports: [SubjectsService],
})
export class SubjectModule {}
