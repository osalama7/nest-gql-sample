import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSubjectDto } from './subject.dto';
import { SubjectsService } from './subject.service';

@Resolver('Subject')
export class SubjectResolver {
  constructor(private readonly subjectService: SubjectsService) {}

  @Query('subjects')
  getSubjects() {
    console.log('Fetching all subjects from resolver');
    return this.subjectService.findAll();
  }

  @Mutation('createSubject')
  createSubject(@Args('input') args: CreateSubjectDto) {
    return this.subjectService.createOne({
      title: args.title,
      content: args.content,
    });
  }
}
