import { Module } from '@nestjs/common';
import { SubjectsService } from './subject.service';
import { SubjectResolver } from './subject.resolver';

@Module({
  providers: [SubjectsService, SubjectResolver],
  exports: [SubjectsService],
})
export class SubjectModule {}
