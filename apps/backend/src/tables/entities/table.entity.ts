import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { TableStatus } from '../types/table.types';

@Schema()
export class Table {
  @Prop({ type: Number, required: true, unique: true })
  tableNo: number;

  @Prop({ type: String, default: 'available', required: true })
  status: string;

  @Prop({ type: Number, required: true })
  seats: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  currentOrder: Types.ObjectId;
}

export const TableSchema = SchemaFactory.createForClass(Table);
