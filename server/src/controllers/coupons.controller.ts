import { Controller, Query, Get, Post, HttpCode, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ParseDatePipe } from 'src/pipes';
import { CouponsService } from 'src/services';
import { Coupon } from 'src/models';
import { CreateCouponDto } from 'src/models/coupon.body.request';

@Controller('/v1/coupons')
export class CouponsController {
  constructor(private coupons: CouponsService) { }

  @Get()
  async getAll(@Query('from', ParseDatePipe) from: Date, @Query('to', ParseDatePipe) to: Date): Promise<Coupon[]> { 
    return this.coupons.getAll(from, to);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() payload: CreateCouponDto): Promise<Coupon> {
    return this.coupons.create(payload);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Coupon> { 
    const coupon = this.coupons.getById(id);

    if (!coupon) {
      throw new NotFoundException();
    }

    return coupon;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() payload: CreateCouponDto): Promise<Coupon> {
    return this.coupons.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    if (!this.coupons.delete(id)) {
      throw new NotFoundException();
    }
  }

  // reset the dataset
  @Post('reset')
  async reset() {
    this.coupons.resetDataset();
  }
}
