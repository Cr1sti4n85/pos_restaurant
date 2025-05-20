import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}
