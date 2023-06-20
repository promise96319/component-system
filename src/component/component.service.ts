import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ComponentService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.component.findMany();
  }
}
