import { BasketsController } from './baskets.controller';
import { ProductsController } from './products.controller';
import { CouponsController } from './coupons.controller';

export * from './baskets.controller';
export * from './products.controller';
export * from './coupons.controller';

export const controllers = [BasketsController, CouponsController, ProductsController]