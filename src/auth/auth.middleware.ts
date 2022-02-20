import { Injectable, NestMiddleware } from '@nestjs/common';
import { middleware } from 'supertokens-node/framework/express/';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  superTokensMiddleware: any;
  constructor() {
    this.superTokensMiddleware = middleware();
  }
  use(req: Request, res: any, next: () => void) {
    return this.superTokensMiddleware(req, res, next);
  }
}
