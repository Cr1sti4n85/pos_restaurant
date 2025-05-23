import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { OrderStatus } from '../types/order.types';

@Schema()
class Customer {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  phone: string;

  @Prop({ required: true, type: Number })
  guests: number;
}

@Schema()
class Bill {
  @Prop({ type: Number, required: true })
  total: number;

  @Prop({ type: Number, required: true })
  tax: number;

  @Prop({ type: Number, required: true })
  totalWithTax: number;
}

@Schema()
class Item {
  @Prop({ type: String, required: true })
  itemName: string;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Number, required: true })
  price: number;
}

@Schema()
export class Order {
  @Prop({ required: true })
  customer: Customer;

  @Prop({ required: true, type: String })
  orderStatus: OrderStatus;

  @Prop({ type: Date, default: Date.now() })
  orderDate: Date;

  @Prop({ required: true })
  items: Item[];

  @Prop({ required: true })
  bill: Bill;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
