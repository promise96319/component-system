import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiDocService } from './api-doc.service';
import { CreateApiDocDto } from './dto/create-api-doc.dto';
import { UpdateApiDocDto } from './dto/update-api-doc.dto';

@Controller('api-doc')
export class ApiDocController {
  constructor(private readonly apiDocService: ApiDocService) {}

  @Post()
  create(@Body() createApiDocDto: CreateApiDocDto) {
    return this.apiDocService.create(createApiDocDto);
  }

  @Get()
  findAll() {
    return this.apiDocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiDocService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiDocDto: UpdateApiDocDto) {
    return this.apiDocService.update(+id, updateApiDocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiDocService.remove(+id);
  }
}
