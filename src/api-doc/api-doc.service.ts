import { Injectable } from '@nestjs/common';
import { CreateApiDocDto } from './dto/create-api-doc.dto';
import { UpdateApiDocDto } from './dto/update-api-doc.dto';

@Injectable()
export class ApiDocService {
  create(createApiDocDto: CreateApiDocDto) {
    return 'This action adds a new apiDoc';
  }

  findAll() {
    return `This action returns all apiDoc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiDoc`;
  }

  update(id: number, updateApiDocDto: UpdateApiDocDto) {
    return `This action updates a #${id} apiDoc`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiDoc`;
  }
}
