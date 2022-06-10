import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

interface IDecode {
  data: { id:number, username:string };
  iat: number;
  exp: number;
}

const authMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    if (typeof authorization === 'string') {
      const decoded = jwt.verify(authorization, 'mysecret');
      const { data } = decoded as IDecode;
      req.data = data;
      next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default authMiddleware;