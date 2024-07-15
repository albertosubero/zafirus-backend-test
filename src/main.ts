import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './response/response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set response interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());

  // Set nestjs Validators
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
  }));

  // Swagger setup
  const config = new DocumentBuilder()
  .setTitle('Zafirus Test Api')
  .setDescription('Api realizada para el test backend de Zafirus')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
