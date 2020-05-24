export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Cart {
  id: string;
  items?: CartItem[];
  coupon?: string;
  createdAt: Date;
  updateAt?: Date;
}

export interface CartAmountItem {
  productId: string;
  amount: number;
}

export interface CartAmount {
  total: number;
  items: CartAmountItem[];
}

