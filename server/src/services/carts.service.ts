import { Injectable, BadRequestException } from '@nestjs/common';
import { Cart, CreateCartDto, CartItem, CouponType, Product, PromotionType } from 'src/models';
import { ProductsService } from './products.service';
import { CouponsService } from './coupons.service';
import { CARTS_CONSTANT } from './constant';
import { CartAmountItem, CartAmountResponse } from 'src/models/cart-amount.response';
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

    this.checkCartItem(payload.items);

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

  getCartAmount(cart: Cart): CartAmountResponse {
    let total = 0;
    const items: CartAmountItem[] = [];

    for (let item of cart.items) {
      const product = this.products.getById(item.productId);

      if (product) {
        const amount = this.getProductAmount(product, item.quantity);
        items.push({ productId: item.productId, amount });
        total += amount;
      }
    }

    if (cart.coupon) {
      total = this.applyCartCoupon(total, cart.coupon);
    }

    return { total: Math.round(total * 100) / 100, items };
  }

  resetDataset() {
    CARTS = { ...CARTS_CONSTANT };
  }

  private checkCartItem(items: CartItem[]) {
    for (let item of items) {
      if (!this.products.getById(item.productId)) { 
        console.log(`PRODUCT ${item.productId} doesn't exist`);
        throw new BadRequestException() // product doesn't exist
      }
    } 
  }

  private applyCartCoupon(amount: number, code: string): number {
    const coupon = this.coupons.getByCode(code);

    if (!coupon) { return amount; }

    switch(coupon.type) {
      case CouponType.Amount: {
        return amount - coupon.value > 0 ? amount - coupon.value : 0;
      }
      case CouponType.Percent: {
        // the value is between 0 and 1
        return amount * (1 - coupon.value);
        break;
      }
    }
  }

  private getProductAmount(product: Product, quantity: number): number {
    if (!product.promotion) {
      return product.price * quantity;
    }

    switch(product.promotion.type) {
      case PromotionType.Pack: {
        const promotion = product.promotion;
        const fullPriceQty = quantity % promotion.quantity;
        const promotionQty = Math.trunc(quantity / promotion.quantity);
    
        return product.price * (promotionQty * promotion.for + fullPriceQty);
      }
      case PromotionType.Percent: {
        return product.price * quantity * (1 - product.promotion.percent);
      }
    }
  }
}
