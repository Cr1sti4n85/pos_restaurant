import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Controller('tables')
// @UseGuards(JwtAuthGuard)
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  add(@Body() createTableDto: CreateTableDto) {
    return this.tablesService.addTable(createTableDto);
  }

  @Get()
  findAll() {
    return this.tablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
    return this.tablesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
    @Body() updateTableDto: UpdateTableDto,
  ) {
    return this.tablesService.updateTable(id, updateTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tablesService.remove(+id);
  }
}
