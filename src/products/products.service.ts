import { Products } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // --- Get All products list --- //
  async getAllProducts(): Promise<Products[]> {
    return this.prisma.products.findMany();
  }

  // --- Get product details by id --- //
  async getProductById(id: number): Promise<Products> {
    return this.prisma.products.findUnique({
      where: {
        id: id,
      },
    });
  }

  // --- Creaate single product --- //
  async createProduct(data: Products): Promise<Products> {
    return this.prisma.products.create({
      data,
    });
  }

  // --- Update product by id --- //
  async updateProduct(id: number, data: Products): Promise<Products> {
    return this.prisma.products.update({
      where: {
        id: id,
      },
      data,
    });
  }

  // --- Delete product by id --- //
  async deleteProduct(id: number): Promise<Products> {
    return this.prisma.products.delete({
      where: {
        id: id,
      },
    });
  }

  // --- Get products with LARGE or MEDIUM size --- //
  async getProductsBySize(): Promise<Products[]> {
    return this.prisma.products.findMany({
      where: {
        size: "LARGE" || "MEDIUM"
      }
    })
  }

  // --- Get products with active category --- //
  async getProductsByActiveCategory(): Promise<Products[]> {
    return this.prisma.products.findMany({
      where: {
        category: {
          active: false
        }
      }
    });
  }
}