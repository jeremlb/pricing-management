import { Product } from "src/models";

const { v4: uuidv4 } = require('uuid');

function randomDate(start, end): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomPrice(min, max): number {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

export const PRODUCTS_CONSTANT: { [id: string]: Product } = {};

const min = 1;
const max = 10000;
const startDate = new Date(2020, 0, 1); // 01/01/2020
const endDate = new Date();

for (let i = 1; i < 1000; i++) {
  const id = uuidv4();

  PRODUCTS_CONSTANT[id] = {
    id,
    name: `product ${i}`,
    price: randomPrice(min, max),
    createdAt: randomDate(startDate, endDate),
    updateAt: null,
  };
}

