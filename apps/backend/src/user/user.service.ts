import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entity/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto) {
    const { fullName, email, password, phone, role } = createUserDto;
    //check if email is in use
    const emailInUse = await this.userModel.findOne({ email });

    if (emailInUse) {
      throw new BadRequestException('Email already in use');
    }

    //create user
    const user = await this.userModel.create({
      fullName,
      email,
      password,
      phone,
      role,
    });

    //return user
    return user;
  }
}
