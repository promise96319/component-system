import { Injectable } from '@nestjs/common';
import { CreateMajorVersionDto } from './dto/create-major-version.dto';
import { UpdateMajorVersionDto } from './dto/update-major-version.dto';

@Injectable()
export class MajorVersionService {
  create(createMajorVersionDto: CreateMajorVersionDto) {
    return 'This action adds a new majorVersion';
  }

  findAll() {
    return `This action returns all majorVersion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} majorVersion`;
  }

  update(id: number, updateMajorVersionDto: UpdateMajorVersionDto) {
    return `This action updates a #${id} majorVersion`;
  }

  remove(id: number) {
    return `This action removes a #${id} majorVersion`;
  }
}
