import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) => throwError(() => this.errorHandler(err, context)))
    );
  }

  errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    console.log("🚀 ~ ResponseInterceptor ~ errorHandler ~ exception.getResponse():", exception)

    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const statusCode = response.statusCode;

    return {
      statusCode,
      message: 'Success request!',
      data: res,
    };
  }
}
