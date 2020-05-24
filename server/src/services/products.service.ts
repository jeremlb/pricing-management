import { Injectable } from '@nestjs/common';
import { Product, CreateProductDto } from 'src/models';
import { PRODUCTS_CONSTANT } from './products.constant';
const { v4: uuidv4 } = require('uuid');

const PRODUCTS: { [id: string]: Product; } = { ...PRODUCTS_CONSTANT };

@Injectable()
export class ProductsService {
  getById(id: string): Product | null {
    return PRODUCTS[id] || null;
  }

  getAll(from?: Date, to?: Date): Product[] {
    let products: Product[] = Object.values(PRODUCTS);

    if (from) {
      products = products.filter(product => (product.createdAt >= new Date(from)));
    }

    if (to) {
      products = products.filter(product => (product.createdAt < new Date(to)));
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
}
