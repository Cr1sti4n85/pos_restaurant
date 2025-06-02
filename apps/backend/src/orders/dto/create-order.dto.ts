import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OrderStatus } from '../types/order.types';
import { Types } from 'mongoose';

export class CustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  phone: string;
  @IsNotEmpty()
  @IsPositive()
  guests: number;
}

export class BillDto {
  @IsNotEmpty()
  @IsPositive()
  total: number;
  @IsNotEmpty()
  @IsPositive()
  tax: number;
  @IsNotEmpty()
  @IsPositive()
  totalWithTax: number;
}
export class ItemDto {
  @IsNotEmpty()
  @IsString()
  itemName: string;
  @IsNotEmpty()
  @IsPositive()
  quantity: number;
  @IsNotEmpty()
  @IsPositive()
  price: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CustomerDto)
  customer: CustomerDto;

  @IsNotEmpty()
  @IsEnum(OrderStatus)
  orderStatus: OrderStatus;

  @IsDate()
  @IsOptional()
  orderDate: Date;

  @IsMongoId()
  @IsNotEmpty()
  table: Types.ObjectId;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ItemDto)
  items: ItemDto[];

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BillDto)
  bill: BillDto;
}
