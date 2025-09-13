import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CreateUserInputDto } from './create-user-input.dto';
import { UserInputService } from './user-input.service';
import { AuthorsService } from 'src/author/author.service';
import { UserInput } from './user-input.entity';

@Resolver('UserMessage')
export class UserInputResolver {
  constructor(
    private readonly userInputService: UserInputService,
    private readonly authorService: AuthorsService,
  ) {}

  @Query('userInputsBySubject')
  userInputsBySubject(@Args('subjectId') subjectId: number) {
    return this.userInputService.findAllBySubjectId(subjectId);
  }

  @ResolveField('author')
  async getAuthor(@Parent() userInput: UserInput) {
    return this.authorService.findOneById(userInput.authorId);
  }

  @Mutation('createUserInput')
  createUserInput(@Args('input') args: CreateUserInputDto) {
    return this.userInputService.createOne({
      author: args.author,
      subject: args.subject,
      content: args.content,
      type: args.type,
      sentAt: args.sentAt,
    });
  }
}
