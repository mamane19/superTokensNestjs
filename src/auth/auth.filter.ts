import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

import { errorHandler } from 'supertokens-node/framework/express';
import { Error as STError } from 'supertokens-node';

@Catch(STError)
export class AuthFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
