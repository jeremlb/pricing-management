import { Controller, Get, Param, Post, Put, Delete, Body, Query, HttpCode, NotFoundException } from '@nestjs/common';
import { Product, CreateProductDto } from 'src/models';
import { ProductsService } from 'src/services';
import { ParseDatePipe } from 'src/pipes';

@Controller('products')
export class ProductsController {
  constructor(private products: ProductsService) { }

  @Get()
  async getAll(@Query('from', ParseDatePipe) from: Date, @Query('to', ParseDatePipe) to: Date): Promise<Product[]> { 
    return this.products.getAll(from, to);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() payload: CreateProductDto): Promise<Product> {
    return this.products.create(payload);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product> { 
    const product = this.products.getById(id);

    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() payload: CreateProductDto): Promise<Product> {
    return this.products.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    if (!this.products.delete(id)) {
      throw new NotFoundException();
    }
  }
}
