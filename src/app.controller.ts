import { BadGatewayException, BadRequestException, ConflictException, Controller, ForbiddenException, GatewayTimeoutException, Get, GoneException, HttpVersionNotSupportedException, ImATeapotException, InternalServerErrorException, MethodNotAllowedException, NotAcceptableException, NotFoundException, NotImplementedException, PayloadTooLargeException, Post, PreconditionFailedException, RequestTimeoutException, ServiceUnavailableException, UnauthorizedException, UnprocessableEntityException, UnsupportedMediaTypeException, UseGuards } from '@nestjs/common';
import { Request } from '@nestjs/common';;
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  async login() {
    return this.appService.login();
  }

  // @UseGuards(JwtAuthGuard)
  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.headers;
  }

  @Get('BadRequest') //400
  getBadRequest() {
    throw new BadRequestException();
  }

  @Get('Unauthorized') //401
  getUnauthorized() {
    throw new UnauthorizedException();
  }

  @Get('NotFound') //404
  getNotFound() {
    throw new NotFoundException();
  }

  @Get('Forbidden') //403
  getForbidden() {
    throw new ForbiddenException();
  }

  @Get('NotAcceptable') //406
  getNotAcceptable() {
    throw new NotAcceptableException();
  }

  @Get('RequestTimeout') //408
  getRequestTimeout() {
    throw new RequestTimeoutException();
  }

  @Get('Conflict') //409
  getConflict() {
    throw new ConflictException();
  }

  @Get('Gone') //410
  getGone() {
    throw new GoneException();
  }

  @Get('HttpVersionNotSupported') //505
  getHttpVersionNotSupported() {
    throw new HttpVersionNotSupportedException();
  }

  @Get('PayloadTooLarge') //413
  getPayloadTooLarge() {
    throw new PayloadTooLargeException();
  }

  @Get('UnsupportedMediaType') //415
  getUnsupportedMediaType() {
    throw new UnsupportedMediaTypeException();
  }

  @Get('UnprocessableEntity') //422
  getUnprocessableEntity() {
    throw new UnprocessableEntityException();
  }

  @Get('InternalServerError') //500
  getInternalServerError() {
    throw new InternalServerErrorException();
  }

  @Get('NotImplemented') //501
  getNotImplemented() {
    throw new NotImplementedException();
  }

  @Get('ImATeapot') //418
  getImATeapot() {
    throw new ImATeapotException();
  }

  @Get('MethodNotAllowed') //405
  getMethodNotAllowed() {
    throw new MethodNotAllowedException();
  }

  @Get('BadGateway') //502
  getBadGateway() {
    throw new BadGatewayException();
  }

  @Get('ServiceUnavailable') //503
  getServiceUnavailable() {
    throw new ServiceUnavailableException();
  }

  @Get('GatewayTimeout') //504
  getGatewayTimeout() {
    throw new GatewayTimeoutException();
  }

  @Get('PreconditionFailed') //412
  getPreconditionFailed() {
    throw new PreconditionFailedException();
  }
}


