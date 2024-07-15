import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Products } from '@prisma/client';
import { ProductsService } from './products.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateProductDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // --- Get All products list --- //
  @ApiOperation({ summary: 'Get All products list' })
  @Get()
  async getAllProducts() {
    return this.productsService.getAllProducts();
  }

  // --- Get product details by id --- //
  @ApiOperation({ summary: 'Get product details by product id' })
  @Get('detail/:id')
  async getProductById(@Param('id') id: string) {
    const productFound = await this.productsService.getProductById(Number(id));
    if (!productFound) throw new HttpException('Product does not exist', HttpStatus.NOT_FOUND);
    return productFound;
  }

  // --- Creaate single product --- //
  @ApiOperation({ summary: 'Creaate single product' })
  @Post()
  async createProduct(@Body() data: CreateProductDto) {
    return this.productsService.createProduct(data);
  }

  // --- Update product by id --- //
  @ApiOperation({ summary: 'Update product by id' })
  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() data: CreateProductDto) {
    try {
    } catch (error) {
      throw new HttpException('Product does not exist', HttpStatus.NOT_FOUND);
    }
  }

  // --- Delete product by id --- //
  @ApiOperation({ summary: 'Delete product by id' })
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    try {
      return await this.productsService.deleteProduct(Number(id));
    } catch (error) {
      throw new HttpException('Product does not exist', HttpStatus.NOT_FOUND);
    }
  }

  // --- Get products with LARGE or MEDIUM size --- //
  @ApiOperation({ summary: 'Get products with LARGE or MEDIUM size' })
  @Get('size/')
  async getProductsBySize() {
    return this.productsService.getProductsBySize();
  }

  // --- Get products with active category --- //
  @ApiOperation({ summary: 'Get products with active category' })
  @Get('active/')
  async getProductsByActiveCategory() {
    return this.productsService.getProductsByActiveCategory();
  }
}