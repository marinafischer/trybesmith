import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
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

  async create(userId:number) {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?);';
    const [data] = await this.connection.execute<ResultSetHeader>(query, [userId]);
    const { insertId } = data;
    return insertId;
  }
}
