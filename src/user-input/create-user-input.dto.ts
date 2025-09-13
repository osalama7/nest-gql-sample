import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { UserInputType } from './user-input.entity';

@InputType()
export class CreateUserInputDto {
  @Field()
  author: number;

  @Field()
  subject: number;

  @Field()
  @Length(1, 500)
  content: string;

  @Field(() => UserInputType)
  type: UserInputType;

  @Field()
  sentAt: Date;
}
