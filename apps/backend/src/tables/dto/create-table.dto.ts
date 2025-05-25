import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateTableDto {
  @IsNotEmpty()
  @IsPositive()
  tableNo: number;
}
