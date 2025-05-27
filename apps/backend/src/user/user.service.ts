import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { User } from './entity/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto) {
    const { name, email, password, phone, role } = createUserDto;
    //check if email is in use
    const emailInUse = await this.userModel.findOne({ email });

    if (emailInUse) {
      throw new BadRequestException('Email already in use');
    }

    //hash password
    const hashedPassword = await hash(password, 10);

    //create user
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    });

    //return user
    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findUserById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
