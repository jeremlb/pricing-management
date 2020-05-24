import { Injectable, BadRequestException } from '@nestjs/common';
import { Cart, CreateCartDto, CartContent } from 'src/models';
import { ProductsService } from './products.service';
import { CouponsService } from './coupons.service';
import { CARTS_CONSTANT } from './constant';
const { v4: uuidv4 } = require('uuid');

let CARTS: { [id: string]: Cart; } = { ...CARTS_CONSTANT };

@Injectable()
export class CartsService {
  constructor(private products: ProductsService, private coupons: CouponsService) {}

  getById(id: string): Cart | null {
    return CARTS[id] || null;
  }

  getAll(from?: Date, to?: Date): Cart[] {
    let coupons: Cart[] = Object.values(CARTS);

    if (from) {
      coupons = coupons.filter(product => (product.createdAt >= from));
    }

    if (to) {
      coupons = coupons.filter(product => (product.createdAt < to));
    }

    return coupons;
  }

  create(payload: CreateCartDto): Cart {
    const id =  uuidv4();

    if (payload.coupon && !this.coupons.getByCode(payload.coupon)) {
      console.log(`COUPON ${payload.coupon} doesn't exist`);
      throw new BadRequestException(); // coupons doesn't exist
    }

    this.chackCartContent(payload.content);

    CARTS[id] = { id, ...payload, createdAt: new Date(), updateAt: null };
    return CARTS[id];
  }

  update(id: string, payload: CreateCartDto) {
    if (CARTS[id]) {
      CARTS[id] = { ...CARTS[id], ...payload, updateAt: new Date() };
    }
    return CARTS[id];
  }

  delete(id: string): boolean {
    if (CARTS[id]) {
      delete CARTS[id];
      return true;
    }

    return false;
  }

  resetDataset() {
    CARTS = { ...CARTS_CONSTANT };
  }

  private chackCartContent(content: CartContent[]) {
    for (let item of content) {
      if (!this.products.getById(item.productId)) { 
        console.log(`PRODUCT ${item.productId} doesn't exist`);
        throw new BadRequestException() // product doesn't exist
      }
    } 
  }
}
