import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  productService = new UserService();

  create = async (req:Request, res:Response) => {
    const user = req.body;
    const token = await this.productService.create(user);
    res.status(201).json({ token });
  };
}