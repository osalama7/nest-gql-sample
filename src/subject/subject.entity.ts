import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Subject {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  content: string;
}
