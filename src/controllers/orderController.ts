import { Request, Response } from 'express';
import OrderService from '../services/orderService';
// import DataReq from '../interfaces/dataReq';

export default class OrderController {
  orderService = new OrderService();

  getAll = async (_req:Request, res:Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  create = async (req:Request, res:Response) => {
    try {
      const { id, productsIds } = req.body;
      await this.orderService.create(id, productsIds);
      return res.status(201).json({ userId: id, productsIds });
    } catch (error) {
      console.log(error);
    }
  };
}