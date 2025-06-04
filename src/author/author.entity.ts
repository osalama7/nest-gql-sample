import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field((type) => Int)
  id: number;

  @Field((type) => String, { nullable: true })
  firstName: string | null;

  @Field((type) => String, { nullable: true })
  laseName: string | null;
}
