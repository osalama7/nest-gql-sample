import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';

export enum UserInputType {
  QUESTION = 'QUESTION',
  ANSWER = 'ANSWER',
  COMMENT = 'COMMENT',
  FEEDBACK = 'FEEDBACK',
  STATEMENT = 'STATEMENT',
  SUGGESTION = 'SUGGESTION',
  IDEA = 'IDEA',
}

@ObjectType()
export class UserInput {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  content: string;

  @Field(() => UserInputType)
  type: UserInputType;

  @Field(() => Int, { nullable: true })
  authorId: number;

  @Field(() => Int, { nullable: true })
  subjectId?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
