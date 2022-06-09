import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class LoginController {
  productService = new UserService();

  auth = async (req:Request, res:Response) => {
    const user = req.body;
    const token = await this.productService.login(user);
    if (!token) return res.status(401).json({ message: 'Username or password invalid' });
    return res.status(200).json({ token });
  };
}