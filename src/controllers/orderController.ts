import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  orderService = new OrderService();

  getAll = async (_req:Request, res:Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };
}