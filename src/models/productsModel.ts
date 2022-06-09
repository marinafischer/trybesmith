import { Pool } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';

export default class ProductModel {
  connection: Pool;

  constructor(Connection:Pool) {
    this.connection = Connection;
  }

  async getAll():Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const [result] = await this.connection.execute(query);
    return result as IProduct[];
  }
}
