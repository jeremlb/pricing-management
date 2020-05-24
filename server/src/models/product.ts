import { Promotion } from "./promotion";

export class Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    promotion?: Promotion;
    createdAt: Date;
    updateAt?: Date;
}
