import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MajorVersionService } from './major-version.service';
import { CreateMajorVersionDto } from './dto/create-major-version.dto';
import { UpdateMajorVersionDto } from './dto/update-major-version.dto';

@Controller('major-version')
export class MajorVersionController {
  constructor(private readonly majorVersionService: MajorVersionService) {}

  @Post()
  create(@Body() createMajorVersionDto: CreateMajorVersionDto) {
    return this.majorVersionService.create(createMajorVersionDto);
  }

  @Get()
  findAll() {
    return this.majorVersionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.majorVersionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMajorVersionDto: UpdateMajorVersionDto,
  ) {
    return this.majorVersionService.update(+id, updateMajorVersionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.majorVersionService.remove(+id);
  }
}
