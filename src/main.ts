import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('组件库管理系统 API')
    .setVersion('1.0.0')
    .addTag('user')
    .addTag('major-version')
    .addTag('component')
    .addTag('api-doc')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);

  app.setGlobalPrefix('api/v1');
  // app.enableCors();
  await app.listen(3000);
}

bootstrap();
