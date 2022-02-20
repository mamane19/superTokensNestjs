import { NextFunction, Response, Request } from 'express';
import { AuthService } from './auth.service';
import { AuthModuleConfig } from './config.interface';
export class AuthMiddleware {
  //   private readonly authService: AuthService;
  //   private readonly config: AuthModuleConfig;
  //   constructor(authService: AuthService, config: AuthModuleConfig) {
  //     this.authService = authService;
  //     this.config = config;
  //   }
  //   async use(req: Request, res: Response, next: NextFunction) {
  //     const token = this.getTokenFromRequest(req);
  //     if (!token) {
  //       return res.status(401).send('No token provided');
  //     }
  //     try {
  //       const user = await this.authService.verifyToken(
  //         token,
  //         this.config.appInfo,
  //       );
  //       req.user = user;
  //       next();
  //     } catch (err) {
  //       return res.status(401).send('Invalid token');
  //     }
  //   }
  //   getTokenFromRequest(req: Request) {
  //     throw new Error('Method not implemented.');
  //   }
}
