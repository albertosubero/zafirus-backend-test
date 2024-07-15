import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime/library";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @ApiProperty({ example: 'XYZZ00', description: 'The code of the Product' })
  code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty({ example: 'Duracell', description: 'The name of the Product' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ example: 1, description: 'The id of the Product category' })
  category_id: number;

  @IsNotEmpty()
  @ApiProperty({ example: 12.00, description: 'The price of the Product' })
  price: Decimal;

  @IsNotEmpty()
  @ApiProperty({ example: 'LARGE', description: 'The size of the Product' })
  size: 'SMALL' | 'MEDIUM' | 'LARGE' | 'EXTRA_LARGE';
}