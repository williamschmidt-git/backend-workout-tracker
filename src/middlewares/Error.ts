import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../enum/HttpStatusCode';

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send('Something broke!');
};
