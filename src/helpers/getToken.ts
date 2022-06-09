import jwt from 'jsonwebtoken';
import IUser from '../interfaces/userInterface';

const getToken = (data: Omit<IUser, 'password'>) => {
  const secret = 'mysecret';
  const jwtConfig:object = {
    expiresIn: '5h',
    algorithm: 'HS256',
  };
  return jwt.sign({ data }, secret, jwtConfig);
};

export default getToken;