import { Args, Query, Resolver } from '@nestjs/graphql';

import { AuthorsService } from './author.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorsService) {}

  @Query('authors')
  async getAuthors() {
    console.log('Fetching all authors from resolver');
    return this.authorService.findAll();
  }

  @Query('author')
  async getAuthor(@Args('id') id: number) {
    return this.authorService.findOneById(id);
  }

  @Query('authorByName')
  async getAuthorByName(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    return this.authorService.findOneByName(firstName, lastName);
  }
}
