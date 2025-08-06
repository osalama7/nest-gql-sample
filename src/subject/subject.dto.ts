import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CreateSubjectDto {
  @Field()
  @Length(1, 255)
  title: string;

  @Field()
  @Length(1, 1000)
  content: string;
}
