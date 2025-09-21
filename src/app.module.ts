import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthorsModule } from './author/author.module';
import { SubjectModule } from './subject/subject.module';
import { UserInputModule } from './user-input/user-input.module';
import { ErrorsInterceptor } from './common/interceptors/exception.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthorsModule,
    SubjectModule,
    UserInputModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  providers: [{ provide: APP_INTERCEPTOR, useClass: ErrorsInterceptor }],
  controllers: [],
})
export class AppModule {}
