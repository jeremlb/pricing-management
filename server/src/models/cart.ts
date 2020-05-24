export interface CartItem {
    productId: string;
    quantity: number;
}

export class Cart {
    id: string;
    items?: CartItem[];
    coupon?: string;
    createdAt: Date;
    updateAt?: Date;
}
