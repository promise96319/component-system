import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  nickname: string | null;

  @ApiProperty()
  email: string;

  @ApiProperty()
  pwd: string;

  @ApiPropertyOptional()
  avatar: string | null;

  @ApiPropertyOptional()
  createdAt: Date;

  @ApiPropertyOptional()
  updatedAt: Date | null;

  @ApiPropertyOptional({ type: 'enum', enum: Role, default: Role.GUEST })
  role: Role;
}
