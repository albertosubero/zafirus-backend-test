import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Products } from '@prisma/client';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const productFound = await this.productsService.getProductById(Number(id));
    if (!productFound) throw new BadRequestException('Product does not exist');
    return productFound;
  }

  @Post()
  async createProduct(@Body() data: Products) {
    return this.productsService.createProduct(data);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() data: Products) {
    try {
      return await this.productsService.updateProduct(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Product does not exist');
    }
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    try {
      return await this.productsService.deleteProduct(Number(id));
    } catch (error) {
      throw new BadRequestException('Product does not exist');
    }
  }
}