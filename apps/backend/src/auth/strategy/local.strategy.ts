import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameFiel: 'email',
    });
  }

  async validate(email: string, password: string): Promise<unknown> {
    return this.authService.verifyUser(email, password);
  }
}
