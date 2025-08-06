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
  @Field((type) => Int)
  id: number;

  @Field((type) => String, { nullable: true })
  title: string;

  @Field((type) => String, { nullable: true })
  content: string;

  @Field((type) => UserInputType)
  type: UserInputType;

  @Field((type) => Int, { nullable: true })
  authorId?: number;

  @Field((type) => Int, { nullable: true })
  subjectId?: number;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date;
}
