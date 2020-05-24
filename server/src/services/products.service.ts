import { Injectable, BadRequestException } from '@nestjs/common';
const { v4: uuidv4 } = require('uuid');

import { PRODUCTS_CONSTANT } from './constant';
import { Product, CreateProductDto, ProductPromotionDto, PromotionType } from 'src/models';

let PRODUCTS: { [id: string]: Product; } = { ...PRODUCTS_CONSTANT };

@Injectable()
export class ProductsService {
  getById(id: string): Product | null {
    return PRODUCTS[id] || null;
  }

  getAll(from?: Date, to?: Date): Product[] {
    let products: Product[] = Object.values(PRODUCTS);

    if (from) {
      products = products.filter(product => (product.createdAt >= from));
    }

    if (to) {
      products = products.filter(product => (product.createdAt < to));
    }

    return products;
  }

  create(payload: CreateProductDto): Product {
    const id =  uuidv4();

    PRODUCTS[id] = { id, ...payload, createdAt: new Date(), updateAt: null };
    return PRODUCTS[id];
  }

  update(id: string, payload: CreateProductDto) {
    if (PRODUCTS[id]) {
      PRODUCTS[id] = { ...PRODUCTS[id], ...payload, updateAt: new Date() };
    }
    return PRODUCTS[id];
  }

  delete(id: string): boolean {
    if (PRODUCTS[id]) {
      delete PRODUCTS[id];
      return true;
    }

    return false;
  }

  addPromotion(id: string, payload: ProductPromotionDto) {
    if (payload.type === PromotionType.Pack && payload.quantity < payload.for) {
      throw new BadRequestException();
    }

    if (PRODUCTS[id]) {
      PRODUCTS[id] = { ...PRODUCTS[id], updateAt: new Date(), promotion: payload };
    }
    return PRODUCTS[id];
  }

  deletePromotion(id: string): boolean {
    if (PRODUCTS[id]) {
      delete PRODUCTS[id].promotion;
      PRODUCTS[id].updateAt = new Date();
      return true;
    }

    return false;
  }

  resetDataset() {
    PRODUCTS = { ...PRODUCTS_CONSTANT };
  }
}
