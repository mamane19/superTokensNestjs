import { Injectable, NestMiddleware } from '@nestjs/common';
import { middleware } from 'supertokens-node/framework/express/';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  superTokensMiddleware: any;
  constructor() {
    this.superTokensMiddleware = middleware();
  }
  use(req: any, res: any, next: () => void) {
    next();
  }
}
