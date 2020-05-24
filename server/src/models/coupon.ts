import { Promotion } from "./promotion";

export enum CouponType {
    Percent = 'percent',
    Amount = 'amount',
}

export class Coupon {
    id: string;
    code: string;
    type: CouponType;
    value?: number;
    createdAt: Date;
    updateAt?: Date;
}
