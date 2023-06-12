import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocModule } from './doc/doc.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27000,
      database: 'component-system',
      synchronize: true,
      autoLoadEntities: true,
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    UserModule,
    DocModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
