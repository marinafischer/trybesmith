import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import ProductModel from '../models/productsModel';

const orderModel = new OrderModel(connection);
const productModel = new ProductModel(connection);

const getOrderId = async (userId:number) => {
  const orderId = await orderModel.create(userId);
  return orderId;
};

export default async (userId:number, products:number[]) => {
  const orderId = await getOrderId(userId);
  return Promise.all(
    products.map((productId) => productModel.update(productId, orderId)),
  );
};