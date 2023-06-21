import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from './module/user/user.module';
import { MajorVersionModule } from './module/major-version/major-version.module';
import { ComponentModule } from './module/component/component.module';
import { ApiDocModule } from './module/api-doc/api-doc.module';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    UserModule,
    MajorVersionModule,
    ComponentModule,
    ApiDocModule,
  ],
})
export class AppModule {}
