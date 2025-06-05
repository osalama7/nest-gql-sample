import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Subject {
  @Field((type) => Int)
  id: number;

  @Field((type) => String, { nullable: true })
  title: string;

  @Field((type) => String, { nullable: true })
  content: string | null;
}
