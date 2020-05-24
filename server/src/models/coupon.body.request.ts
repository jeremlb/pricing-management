import { MaxLength, IsPositive, IsIn } from 'class-validator';
import { CouponType } from './coupon';

export const MAX_COUPONS_CODE_LENGTH = 10;

export class CreateCouponDto {
    @MaxLength(MAX_COUPONS_CODE_LENGTH)
    code!: string;

    @IsIn([CouponType.Percent, CouponType.Amount])
    type!: CouponType;    

    @IsPositive()
    value!: number;
}
