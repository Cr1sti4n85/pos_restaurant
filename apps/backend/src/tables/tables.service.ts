import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Table } from './entities/table.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class TablesService {
  constructor(@InjectModel(Table.name) private tableModel: Model<Table>) {}

  async addTable(createTableDto: CreateTableDto) {
    const { tableNo } = createTableDto;

    const tableExist = await this.tableModel.findOne({ tableNo });

    if (tableExist) {
      throw new BadRequestException(
        `Table with number ${tableNo} already exists`,
      );
    }

    const newTable = await this.tableModel.create({
      tableNo,
    });

    return newTable;
  }

  findAll() {
    return this.tableModel.find().exec();
  }

  async findOne(id: Types.ObjectId) {
    const table = await this.tableModel.findById(id).exec();
    if (!table) {
      throw new Error(`Table with id ${id} not found`);
    }

    return table;
  }

  async updateTable(id: Types.ObjectId, updateTableDto: UpdateTableDto) {
    const { status, orderId } = updateTableDto;
    const tableToUpdate = await this.findOne(id);

    tableToUpdate.status = status;
    tableToUpdate.currentOrder = orderId;

    await tableToUpdate.save();

    return tableToUpdate;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
