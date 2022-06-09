import connection from '../models/connection';
import { IOrderResponse } from '../interfaces/orderInterface';
import OrderModel from '../models/orderModel';
import ProductModel from '../models/productsModel';

export default class OrderService {
  model: OrderModel;

  productModel : ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  async getAll():Promise<IOrderResponse[]> {
    const orders = await this.model.getAll();
    const getProductId = await Promise.all(
      orders.map(async (order) => {
        const arrayIds = await this.productModel.getById(order.id);
        const ids = arrayIds[0].productsIds.split(',');
        const numberIds = ids.map((id) => +id);
        return { ...order, productsIds: numberIds };
      }),
    );
    return getProductId;
  }
}