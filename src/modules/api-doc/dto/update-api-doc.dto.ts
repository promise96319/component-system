import { PartialType } from '@nestjs/swagger';
import { CreateApiDocDto } from './create-api-doc.dto';

export class UpdateApiDocDto extends PartialType(CreateApiDocDto) {}
