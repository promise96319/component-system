import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from './modules/user/user.module';
import { MajorVersionModule } from './modules/major-version/major-version.module';
import { ComponentModule } from './modules/component/component.module';
import { ApiDocModule } from './modules/api-doc/api-doc.module';

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
