import { Module } from '@nestjs/common';
import { SubjectsService } from './subject.service';
import { SubjectResolver } from './subject.resolver';
import { PrismaModule } from '../prisma.module';

@Module({
  providers: [SubjectsService, SubjectResolver],
  exports: [SubjectsService],
  imports: [PrismaModule],
})
export class SubjectModule {}
