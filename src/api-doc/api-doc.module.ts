import { Module } from '@nestjs/common';
import { ApiDocService } from './api-doc.service';
import { ApiDocController } from './api-doc.controller';

@Module({
  controllers: [ApiDocController],
  providers: [ApiDocService]
})
export class ApiDocModule {}
