import { CartsService } from './carts.service';
import { CouponsService } from './coupons.service';
import { ProductsService } from './products.service';

export * from './carts.service';
export * from './coupons.service';
export * from './products.service';

export const services = [
  CartsService,
  CouponsService,
  ProductsService,
];
