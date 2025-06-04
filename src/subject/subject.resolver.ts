import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Subject } from '../generated/graphql';
import { SubjectsService } from './subject.service';

@Resolver('Subject')
export class SubjectResolver {
  constructor(private readonly subjectService: SubjectsService) {}

  @Query('subjects')
  getSubjects(): Subject[] {
    console.log('Fetching all subjects from resolver');
    return this.subjectService.findAll();
  }

  @Mutation('createSubject')
  createSubject(@Args('subject') subject: Subject): Subject {
    return this.subjectService.createOne(subject);
  }
}
