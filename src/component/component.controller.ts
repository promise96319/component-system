import { Controller, Get } from '@nestjs/common';
import { ComponentService } from './component.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ComponentEntity } from './entities/component.entity';

@Controller('component')
@ApiTags('component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @Get()
  @ApiResponse({ type: ComponentEntity })
  findAll() {
    return this.componentService.findAll();
  }
}
