import { ProductsService } from "./products.service";
import { CouponsService } from "./coupons.service";

export * from './coupons.service';
export * from './products.service';

export const services = [
  CouponsService,
  ProductsService,
];
