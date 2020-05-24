export interface CartAmountItem {
    productId: string;
    amount: number;
}

export interface CartAmountResponse {
    total: number;
    items: CartAmountItem[];
}
