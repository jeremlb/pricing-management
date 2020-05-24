import { IsString, MaxLength, IsOptional, IsPositive, IsIn } from 'class-validator';
import { CouponType } from './coupon';

export class CreateCouponDto {
    @MaxLength(10)
    code!: string;

    @IsIn([CouponType.Percent, CouponType.Amount])
    type!: CouponType;    

    @IsPositive()
    value!: number;
}
