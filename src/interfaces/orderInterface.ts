interface IOrder {
  id: number,
  userId:number,
}

interface IOrderResponse extends IOrder {
  productsIds: number[]
}

export { IOrder, IOrderResponse };