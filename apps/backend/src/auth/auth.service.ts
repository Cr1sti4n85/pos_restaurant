import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compare } from 'bcryptjs';
import { Response } from 'express';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { TokenPayload } from './types/token-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
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
      userId: user._id.toHexString(),
    };
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
