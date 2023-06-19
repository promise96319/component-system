import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'nestjs-prisma';
import { MajorVersionModule } from './major-version/major-version.module';
import { ComponentModule } from './component/component.module';
import { ApiDocModule } from './api-doc/api-doc.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), UserModule, MajorVersionModule, ComponentModule, ApiDocModule],
})
export class AppModule {}
