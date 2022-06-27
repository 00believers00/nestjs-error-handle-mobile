import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private jwtTokenService: JwtService) {}

  async login() {
    const payload = { username: "00believers00", sub: "009912312741290" };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
