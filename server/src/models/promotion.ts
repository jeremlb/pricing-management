export enum PromotionType {
  Percent = 'percent',
  Pack = 'pack',
}

export interface Promotion {
  type: PromotionType;
  percent?: number;
  quantity?: number;
  for?: number;
}