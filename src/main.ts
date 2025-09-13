import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const configService = app.get(ConfigService);
  const user: string = configService.getOrThrow('RABBITMQ_DEFAULT_USER');
  const pass: string = configService.getOrThrow('RABBITMQ_DEFAULT_PASS');
  const host: string = configService.getOrThrow('RABBITMQ_HOST');
  const port: string = configService.getOrThrow('RABBITMQ_PORT');
  const amqpUrl = `amqp://${user}:${pass}@${host}:${port}/`;

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [amqpUrl],
      queue: 'message_sent',
      queueOptions: { durable: true },
    },
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 4000, '0.0.0.0');
  console.log(`Application is running on: port ${await app.getUrl()}`);
}
bootstrap().catch((err) => {
  console.error('Error starting application:', err);
});
