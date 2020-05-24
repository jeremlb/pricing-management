import { Controller, Query, Get, Post, HttpCode, Param, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { CartsService } from 'src/services';
import { ParseDatePipe } from 'src/pipes';
import { Cart, CreateCartDto } from 'src/models';
import { CartAmountResponse } from 'src/models/cart-amount.response';

@Controller('/v1/carts')
export class CartsController {
  constructor(private carts: CartsService) { }

  @Get()
  async getAll(@Query('from', ParseDatePipe) from: Date, @Query('to', ParseDatePipe) to: Date): Promise<Cart[]> { 
    return this.carts.getAll(from, to);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() payload: CreateCartDto): Promise<Cart> {
    return this.carts.create(payload);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Cart> { 
    const cart = this.carts.getById(id);

    if (!cart) {
      throw new NotFoundException();
    }

    return cart;
  }

  @Get(':id/amount')
  async getCartAmount(@Param('id') id: string): Promise<CartAmountResponse> { 
    const cart = await this.getById(id);
    return this.carts.getCartAmount(cart);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() payload: CreateCartDto): Promise<Cart> {
    return this.carts.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    if (!this.carts.delete(id)) {
      throw new NotFoundException();
    }
  }

  // reset the dataset
  @Post('reset')
  async reset() {
    this.carts.resetDataset();
  }
}
