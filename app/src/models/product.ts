import { Promotion } from './promotion';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  promotion?: Promotion;
  createdAt: Date;
  updateAt?: Date;
}
