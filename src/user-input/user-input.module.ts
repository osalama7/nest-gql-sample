import { Module } from '@nestjs/common';
import { UserInputService } from './user-input.service';
import { UserInputResolver } from './user-input.resolver';
import { UserInputController } from './user-input.controller';
import { PrismaModule } from './../prisma.module';
import { AuthorsService } from 'src/author/author.service';

@Module({
  providers: [
    UserInputService,
    UserInputResolver,
    UserInputController,
    AuthorsService,
  ],
  exports: [UserInputService],
  imports: [PrismaModule],
  controllers: [UserInputController],
})
export class UserInputModule {}
