export interface CartContent {
    productId: string;
    quantity: number;
}

export class Cart {
    id: string;
    content?: CartContent[];
    coupon?: string;
    createdAt: Date;
    updateAt?: Date;
}
