import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreateSubjectDto } from './subject.dto';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectsService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
  async findOneById(id: number) {
    return this.prismaService.subject.findUniqueOrThrow({
      where: { id },
    });
  }

  async findAll() {
    return this.prismaService.subject.findMany();
  }

  async createOne(subject: CreateSubjectDto) {
    return this.prismaService.subject.create({ data: subject });
  }
}
