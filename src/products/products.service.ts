import { Products } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(): Promise<Products[]> {
    return this.prisma.products.findMany();
  }

  async getProductById(id: number): Promise<Products> {
    return this.prisma.products.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createProduct(data: Products): Promise<Products> {
    return this.prisma.products.create({
      data,
    });
  }

  async updateProduct(id: number, data: Products): Promise<Products> {
    return this.prisma.products.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteProduct(id: number): Promise<Products> {
    return this.prisma.products.delete({
      where: {
        id: id,
      },
    });
  }
}