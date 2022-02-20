import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import supertokens from 'supertokens-node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      ...supertokens.getAllCORSHeaders(),
    ],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
