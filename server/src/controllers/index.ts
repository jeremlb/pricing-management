import { CartsController } from './carts.controller';
import { CouponsController } from './coupons.controller';
import { ProductsController } from './products.controller';

export * from './carts.controller';
export * from './coupons.controller';
export * from './products.controller';


export const controllers = [CartsController, CouponsController, ProductsController];
