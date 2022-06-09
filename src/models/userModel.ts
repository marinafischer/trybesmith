import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/userInterface';

export default class UserModel {
  connection: Pool;

  constructor(Connection:Pool) {
    this.connection = Connection;
  }

  async create(user: Omit<IUser, 'id'>) {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users (username, classe,level,password) 
      VALUES (?,?,?,?);`;
    const [data] = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    const { insertId } = data;
    return { id: insertId, username, classe, level };
  }

  async getByName(name:string):Promise<IUser> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username=?';
    const [data] = await this.connection.execute(query, [name]);
    const [user] = data as IUser[];
    return user;
  }
}
