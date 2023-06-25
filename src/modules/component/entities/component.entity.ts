import { ApiProperty } from '@nestjs/swagger';
import { Component, ComponentDetail } from '@prisma/client';

export class ComponentEntity implements Component {
  @ApiProperty()
  id: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  majorVersionId: string;

  @ApiProperty()
  components: ComponentDetail[];
}
