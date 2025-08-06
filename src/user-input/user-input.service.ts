import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreateUserInputDto } from './create-user-input.dto';

@Injectable()
export class UserInputService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async findAllBySubjectId(subjectId) {
    return this.prismaService.userInput.findMany({
      where: {
        subject: {
          id: subjectId,
        },
      },
    });
  }

  async createOne(userInput: CreateUserInputDto): Promise<any> {
    const { author, subject, ...rest } = userInput;
    console.log('Creating user input:', userInput);
    try {
      const res = await this.prismaService.userInput.create({
        data: {
          ...rest,
          author: {
            connect: { id: author }, // assumes author has an 'id' property
          },
          subject: {
            connect: { id: subject }, // assumes subject has an 'id' property
          },
        },
      });
      if (res) {
        console.log('User input created successfully:', res);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error creating user input:', error);
      return false;
    }
  }
}
