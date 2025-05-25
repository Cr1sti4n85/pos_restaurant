import { Types } from 'mongoose';
import { TableStatus } from '../types/table.types';
import { IsEnum, IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateTableDto {
  @IsEnum(TableStatus, { message: 'No es una estatus válido' })
  @IsNotEmpty()
  status: TableStatus;

  @IsNotEmpty()
  @IsMongoId({ message: 'No es id válido' })
  orderId: Types.ObjectId;
}
