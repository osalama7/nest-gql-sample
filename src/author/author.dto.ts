import { IsString } from 'class-validator';

export class GetAuthorDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
