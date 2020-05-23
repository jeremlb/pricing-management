import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { Product, ProductBodyRequest } from 'src/models';

@Controller('products')
export class ProductsController {
  constructor() { }

  @Get()
  async getAll(): Promise<Product[]> { return []; }

  @Post()
  async create(@Body() _payload: ProductBodyRequest): Promise<Product> {
    return {} as any;
  }

  @Get(':id')
  async getById(@Param() _id: number): Promise<Product> { 
    return {} as any;
  }

  @Put(':id')
  async update(@Param() _id: number, @Body() _payload: ProductBodyRequest): Promise<Product> {
    return {} as any;
  }

  @Delete(':id')
  async delete(@Param() _id: number) { }
}
