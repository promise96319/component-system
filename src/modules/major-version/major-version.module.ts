import { Module } from '@nestjs/common';
import { MajorVersionService } from './major-version.service';
import { MajorVersionController } from './major-version.controller';

@Module({
  controllers: [MajorVersionController],
  providers: [MajorVersionService],
})
export class MajorVersionModule {}
