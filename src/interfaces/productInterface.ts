export interface IProduct {
  id:number;
  name:string;
  amount:string;
  orderId:number | null;
}

export type IProductIds = { productsIds: string };