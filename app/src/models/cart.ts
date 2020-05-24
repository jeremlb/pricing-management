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

export interface CartAmount {
  amount: number;
}
