import { IsPositive, IsEnum, Min, Max, ValidateIf, IsIn, IsNumber } from 'class-validator';
import { PromotionType } from './promotion';

export class ProductPromotionDto {
    @IsIn([PromotionType.Pack, PromotionType.Percent])
    type!: PromotionType;

    @ValidateIf(o => o.type === PromotionType.Pack)
    @IsPositive()
    @IsNumber()
    quantity!: number;

    @ValidateIf(o => o.type === PromotionType.Pack)
    @IsPositive()
    @IsNumber()
    for!: number;

    @Min(0)
    @Max(1)
    @ValidateIf(o => o.type === PromotionType.Percent)
    percent!: number;
}
