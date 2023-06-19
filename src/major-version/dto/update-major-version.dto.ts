import { PartialType } from '@nestjs/swagger';
import { CreateMajorVersionDto } from './create-major-version.dto';

export class UpdateMajorVersionDto extends PartialType(CreateMajorVersionDto) {}
