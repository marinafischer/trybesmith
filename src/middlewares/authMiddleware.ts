import { Response, NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';
// import DataReq from '../interfaces/dataReq';

interface IDecode {
  data: { id:number, username:string };
  iat: number;
  exp: number;
}

const authMiddleware = (req: Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    if (typeof authorization === 'string') {
      const decoded = jwt.verify(authorization, 'mysecret');
      const { data: { id } } = decoded as IDecode;
      req.body = { ...req.body, id };
      return next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  return next();
};

export default authMiddleware;