import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // autoriser le cors
  app.enableCors();

  // Swagger
  const options = new DocumentBuilder()
    .setTitle('Documentation api centrale')
    .setDescription('Cette api permet de coordonner les différents services utilisé par wild api')
    .setVersion('1.0')
    .setSchemes('https')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);

}
bootstrap();
