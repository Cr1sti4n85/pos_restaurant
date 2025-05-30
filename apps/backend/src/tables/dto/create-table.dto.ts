import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateTableDto {
  @IsNotEmpty()
  @IsPositive({ message: 'El valor debe ser numérico y positivo' })
  tableNo: number;

  @IsNotEmpty()
  @IsPositive({ message: 'El valor debe ser numérico y positivo' })
  seats: number;
}
