import { Args, Query, Resolver } from '@nestjs/graphql';

import { Author } from './../generated/graphql';
import { AuthorsService } from './author.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorsService) {}

  @Query('authors')
  getAuthors(): Author[] {
    console.log('Fetching all authors from resolver');
    return this.authorService.findAll();
  }

  @Query('author')
  async getAuthor(@Args('id') id: number): Promise<Author | null> {
    console.log(`Fetching author with ID: ${id}`);
    return await this.authorService.findOneById(id);
  }
}
