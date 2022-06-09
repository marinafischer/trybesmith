import Joi from 'joi';
import { RequestHandler } from 'express';

const PRODUCT = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
});

const productMiddleware: RequestHandler = (req, _res, next) => {
  const { error } = PRODUCT.validate(req.body);
  if (error) return next(error);
  return next();
};

export default productMiddleware;