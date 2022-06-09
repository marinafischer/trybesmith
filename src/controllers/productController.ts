import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  productService = new ProductService();

  getAll = async (_req:Request, res:Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  create = async (req:Request, res:Response) => {
    const product = req.body;
    const createProduct = await this.productService.create(product);
    res.status(201).json(createProduct);
  };
}