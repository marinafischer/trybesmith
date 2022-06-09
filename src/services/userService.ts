import connection from '../models/connection';
import IUser from '../interfaces/userInterface';
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
}