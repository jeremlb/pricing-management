import { IsString, MaxLength, IsOptional, IsPositive } from 'class-validator';

export class CreateProductDto {
    @MaxLength(50)
    name!: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsPositive()
    price!: number;
}
