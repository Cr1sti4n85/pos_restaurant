import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compare } from 'bcryptjs';
import { Response } from 'express';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { TokenPayload } from './types/token-payload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User, res: Response) {
    const expiresAccessToken = new Date();
    const expirationMs = parseInt(
      this.configService.getOrThrow<string>('JWT_ACCESS_EXPIRATION_MS'),
    );

    expiresAccessToken.setTime(expiresAccessToken.getTime() + expirationMs);

    const expiresRefreshToken = new Date();
    const expirationRefreshMs = parseInt(
      this.configService.getOrThrow<string>('JWT_REFRESH_EXPIRATION_MS'),
    );

    expiresRefreshToken.setTime(
      expiresRefreshToken.getTime() + expirationRefreshMs,
    );

    const tokenPayload: TokenPayload = {
      userId: user._id.toString(),
    };

    const accessToken = this.jwtService.sign(tokenPayload, {
      secret: this.configService.getOrThrow<string>('JWT_ACCESS_SECRET'),
      expiresIn: `${this.configService.getOrThrow<string>('JWT_ACCESS_EXPIRATION_MS')}ms`,
    });

    const refreshToken = this.jwtService.sign(tokenPayload, {
      secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
      expiresIn: `${this.configService.getOrThrow<string>('JWT_REFRESH_EXPIRATION_MS')}ms`,
    });

    const REFRESH_PATH = '/api/auth/refresh';

    res
      .cookie('authentication', accessToken, {
        httpOnly: true,
        secure:
          this.configService.getOrThrow<string>('NODE_ENV') === 'production',
        expires: expiresAccessToken,
      })
      .cookie('refresh', refreshToken, {
        httpOnly: true,
        secure:
          this.configService.getOrThrow<string>('NODE_ENV') === 'production',
        expires: expiresRefreshToken,
        // path: REFRESH_PATH,
      });

    return user;
  }

  async verifyUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.userService.findUserByEmail(email);
      const isAuthenticated = await compare(password, user.password);

      if (!isAuthenticated) {
        throw new UnauthorizedException();
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException('Credenciales no válidas');
    }
  }
}
