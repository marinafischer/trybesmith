import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
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

  async create({ name, amount }: Omit<IProduct, 'id' | 'orderId'>) {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?);';
    const [data] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId } = data;
    return { id: insertId, name, amount };
  }
}
