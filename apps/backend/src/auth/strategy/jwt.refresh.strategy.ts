import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayload } from '../types/token-payload';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    configService: ConfigService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => request.cookies?.refresh,
      ]),
      secretOrKey: configService.getOrThrow('JWT_REFRESH_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(payload: TokenPayload) {
    const user = await this.userService.findUserById(payload.userId);

    if (!user) throw new UnauthorizedException('Invalid token');

    return user;
  }
}
