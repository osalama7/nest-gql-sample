import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthorsModule } from './author/author.module';
import { SubjectModule } from './subject/subject.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthorsModule,
    SubjectModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
