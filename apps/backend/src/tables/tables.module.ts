import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Table, TableSchema } from './entities/table.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }]),
  ],
  controllers: [TablesController],
  providers: [TablesService],
})
export class TablesModule {}
