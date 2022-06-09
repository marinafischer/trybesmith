import connection from '../models/connection';
import IProduct from '../interfaces/productInterface';
import ProductModel from '../models/productsModel';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAll():Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}