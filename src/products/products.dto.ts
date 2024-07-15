import { Decimal } from "@prisma/client/runtime/library";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @MaxLength(30)
  code: string;

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  category_id: number;

  @IsNotEmpty()
  price: Decimal;

  @IsNotEmpty()
  size: 'SMALL' | 'MEDIUM' | 'LARGE' | 'EXTRA_LARGE';
}