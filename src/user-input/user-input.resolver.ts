import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInputDto } from './create-user-input.dto';
import { UserInputService } from './user-input.service';

@Resolver('UserInput')
export class UserInputResolver {
  constructor(private readonly userInputService: UserInputService) {}

  @Query('userInputsBySubject')
  userInputsBySubject(@Args('subjectId') subjectId: number) {
    return this.userInputService.findAllBySubjectId(subjectId);
  }

  @Mutation('createUserInput')
  createUserInput(@Args('input') args: CreateUserInputDto) {
    return this.userInputService.createOne({
      author: args.author,
      subject: args.subject,
      content: args.content,
      type: args.type,
    });
  }
}
