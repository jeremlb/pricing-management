import { Injectable, BadRequestException } from '@nestjs/common';
import { Coupon, CreateCouponDto, CouponType } from 'src/models';
import { COUPONS_CONSTANT } from './constant';
const { v4: uuidv4 } = require('uuid');

let COUPONS: { [id: string]: Coupon; } = { ...COUPONS_CONSTANT };

@Injectable()
export class CouponsService {
  getById(id: string): Coupon | null {
    return COUPONS[id] || null;
  }

  getByCode(code: string): Coupon | null {
    return Object.values(COUPONS).find(coupon => coupon.code === code);
  }

  getAll(from?: Date, to?: Date): Coupon[] {
    let coupons: Coupon[] = Object.values(COUPONS);

    if (from) {
      coupons = coupons.filter(coupon => (coupon.createdAt >= from));
    }

    if (to) {
      coupons = coupons.filter(coupon => (coupon.createdAt < to));
    }

    return coupons;
  }

  create(payload: CreateCouponDto): Coupon {
    const id =  uuidv4();

    if (this.getByCode(payload.code)) {
      throw new BadRequestException();
    }

    // this is a percentage, it is a number between 0 and 1
    if (payload.type === CouponType.Percent && payload.value > 1) {
      throw new BadRequestException(); 
    }

    COUPONS[id] = { id, ...payload, createdAt: new Date(), updateAt: null };
    return COUPONS[id];
  }

  update(id: string, payload: CreateCouponDto) {
    if (this.getByCode(payload.code)) {
      throw new BadRequestException();
    }

    if (COUPONS[id]) {
      COUPONS[id] = { ...COUPONS[id], ...payload, updateAt: new Date() };
    }
    return COUPONS[id];
  }

  delete(id: string): boolean {
    if (COUPONS[id]) {
      delete COUPONS[id];
      return true;
    }

    return false;
  }

  resetDataset() {
    COUPONS = { ...COUPONS_CONSTANT };
  }
}
