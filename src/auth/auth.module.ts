import {
  MiddlewareConsumer,
  Module,
  NestModule,
  DynamicModule,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthMiddleware } from './auth.middleware';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
