import { Request, Response } from 'express';
import OrderService from '../services/orderService';
import orderProductService from '../services/orderProductService';

export default class OrderController {
  orderService = new OrderService();

  getAll = async (_req:Request, res:Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  create = async (req:Request, res:Response) => {
    try {
      const { id } = req.data;
      const { productsIds } = req.body;
      await orderProductService(id, productsIds);
      // await this.orderService.create(id, productsIds);
      res.status(201).json({ userId: id, productsIds });
    } catch (e) {
      console.log(e);
    }
  };
}