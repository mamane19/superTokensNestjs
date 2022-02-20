import { Injectable } from '@nestjs/common';
import { AppInfo } from 'supertokens-node/lib/build/types';

@Injectable()
export class AuthService {
     verifyToken(token: never, appInfo: AppInfo) {
          throw new Error('Method not implemented.');
     }
}
