import { ErrorRequestHandler } from 'express';

const errorMiddleware:ErrorRequestHandler = (error, _req, res, _next) => {
  let status = 400;
  if (error.message.includes('must')) status = 422; 
  return res.status(status).json({ message: error.message });
};

export default errorMiddleware;