import { NestMiddleware, MiddlewareFunction, Injectable } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      console.log('Request...');
      next();
    }
  }
}