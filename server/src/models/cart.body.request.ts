import { IsPositive, IsUUID, ValidateNested, IsOptional, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { MAX_COUPONS_CODE_LENGTH } from './coupon.body.request';
import { IsNonPrimitiveArray } from 'src/decorators';

export class CreateCartDto {
    @ValidateNested({ each: true })
    @IsNonPrimitiveArray()
    @Type(() => CartContentDto)
    content!: CartContentDto[];

    @IsOptional()
    @MaxLength(MAX_COUPONS_CODE_LENGTH)
    coupon!: string;
}

export class CartContentDto {
    @IsUUID('4')
    productId: string;

    @IsPositive()
    quantity: number;
}
