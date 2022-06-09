import { ErrorRequestHandler } from 'express';

const errorMiddleware:ErrorRequestHandler = (error, _req, res, _next) => {
  let status = 400;
  if (error.message.includes('must')) status = 422; 
  res.status(status).json(error.message);
};

export default errorMiddleware;