import { Module } from '@nestjs/common';
import { UserInputService } from './user-input.service';
import { UserInputResolver } from './user-input.resolver';
import { PrismaService } from './../prisma.service';

@Module({
  providers: [UserInputService, UserInputResolver, PrismaService],
  exports: [UserInputService],
})
export class UserInputModule {}
