import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './entities/order.entity';
import { Model } from 'mongoose';
import { OrderStatus } from './types/order.types';
import { Table } from 'src/tables/entities/table.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
  async create(createOrderDto: CreateOrderDto) {
    const {
      customer,
      orderStatus,
      orderDate,
      table,
      paymentMethod,
      items,
      bill,
    } = createOrderDto;
    // Create a new order
    const order = await this.orderModel.create({
      customer,
      orderStatus,
      orderDate,
      table,
      paymentMethod,
      items,
      bill,
    });

    return order;
  }

  findAll() {
    return this.orderModel.find().populate({
      path: 'table',
      model: Table.name,
    });
  }

  async findOne(id: string) {
    const order = await this.orderModel.findById(id);
    if (!order) {
      throw new Error(`Order with id ${id} not found`);
    }
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const { orderStatus } = updateOrderDto;

    const order = await this.findOne(id);
    // Update the order with the new data
    if (orderStatus) {
      order.orderStatus = orderStatus as OrderStatus;
      await order.save();
    }

    return order;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
