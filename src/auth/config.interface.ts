import { AppInfo } from 'supertokens-node/lib/build/types';

export const configInjectionToken = 'config';

export type AuthModuleConfig = {
  appInfo: AppInfo;
  connectionURI: string;
  apiKey?: string;
};
