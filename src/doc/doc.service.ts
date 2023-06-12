import { Injectable } from '@nestjs/common';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DocService {
  constructor(private prisma: PrismaService) {}

  create(createDocDto: CreateDocDto) {
    return this.prisma.doc.create({
      data: {
        email: 'hello@email.com',
        name: '王二233',
      },
    });
  }

  findAll() {
    return this.prisma.doc.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} doc`;
  }

  update(id: number, updateDocDto: UpdateDocDto) {
    return `This action updates a #${id} doc`;
  }

  remove(id: number) {
    return `This action removes a #${id} doc`;
  }
}
