import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
  })
  fullName: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  email: string;

  @Prop({
    type: String,
    default: false,
  })
  phone: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  password: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
