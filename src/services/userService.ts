import connection from '../models/connection';
import IUser from '../interfaces/userInterface';
import ILogin from '../interfaces/loginInterface';
import UserModel from '../models/userModel';
import getToken from '../helpers/getToken';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: Omit<IUser, 'id'>) {
    const data = await this.model.create(user);
    return getToken(data);
  }

  async login(data:ILogin):Promise<string | null> {
    const user = await this.model.getByName(data.username);
    if (!user || user.password !== data.password) {
      return null;
    }
    const { id, username, classe, level } = user;
    return getToken({ id, username, classe, level });
  }
}