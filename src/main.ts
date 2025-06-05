import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 4000);
  console.log(`Application is running on: port ${await app.getUrl()}`);
}
bootstrap();
