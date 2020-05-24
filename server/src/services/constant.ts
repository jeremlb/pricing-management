const { v4: uuidv4 } = require('uuid');
import { Product, Coupon, CouponType } from "src/models";

// helpers
function randomDate(start, end): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomNumber(min, max): number {
  return (Math.random() * (max - min) + min); 
}

function randomArrayElement(array: Array<any>): any {
  return array[Math.floor(Math.random() * array.length)];
} 

function randomPrice(min, max): number {
  return Math.round(randomNumber(min, max) * 100) / 100;
}

function getRandomCouponValue(type: CouponType): number {
  const COUPONS_PERCENT_VALUES = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
  const COUPONS_AMOUNT_VALUES = [1, 5, 10, 30, 50];

  if (type === CouponType.Percent) {
    return randomArrayElement(COUPONS_PERCENT_VALUES);
  }
  return randomArrayElement(COUPONS_AMOUNT_VALUES);
}


// dataset generation
export const PRODUCTS_CONSTANT: { [id: string]: Product } = {
  'fe51f619-354a-4cb1-8536-251864b017cc': {
    id: 'fe51f619-354a-4cb1-8536-251864b017cc',
    name: 'product test',
    price: 5600.58,
    createdAt: new Date("2020-02-25T11:41:15.073Z"),
    updateAt: null
  },
};

export const COUPONS_CONSTANT: { [id: string]: Coupon } = {
  '594543a8-2978-4ff2-abff-f11d026c3c75': {
    id: '594543a8-2978-4ff2-abff-f11d026c3c75',
    code: 'COUPON_P',
    type: CouponType.Amount,
    value: 10,
    createdAt: new Date('0528-09-03T18:39:37.769Z'),
    updateAt: null
  },
  'cfa0d5e5-59d1-44ce-a9df-1a3ed525604d': {
    id: 'cfa0d5e5-59d1-44ce-a9df-1a3ed525604d',
    code: 'COUPON_A',
    type: CouponType.Percent,
    value: 0.1,
    createdAt: new Date('0355-02-14T09:57:11.750Z'),
    updateAt: null
  },
};

const min = 1;
const max = 10000;
const startDate = new Date(2020, 0, 1); // 01/01/2020
const endDate = new Date();

const NB_ENTITIES = 10;

for (let i = 1; i < NB_ENTITIES + 1; i++) {

  let id = uuidv4();
  // -- product --
  PRODUCTS_CONSTANT[id] = {
    id,
    name: `product ${i}`,
    price: randomPrice(min, max),
    createdAt: randomDate(startDate, endDate),
    updateAt: null,
  };

  id = uuidv4();
  // -- coupon -- 
  const couponType = i <= (NB_ENTITIES/2) ? CouponType.Amount : CouponType.Percent;
  COUPONS_CONSTANT[id] = {
    id,
    code: `COUPON_${i}`,
    type: couponType,
    value: getRandomCouponValue(couponType),
    createdAt: randomDate(startDate, endDate),
    updateAt: null,
  }
}

