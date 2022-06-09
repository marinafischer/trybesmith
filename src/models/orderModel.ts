import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/orderInterface';

export default class OrderModel {
  connection: Pool;

  constructor(Connection:Pool) {
    this.connection = Connection;
  }

  async getAll():Promise<IOrder[]> {
    const query = 'SELECT * FROM Trybesmith.Orders;';
    const [result] = await this.connection.execute(query);
    return result as IOrder[];
  }
}
