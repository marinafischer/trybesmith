import Joi from 'joi';
import { RequestHandler } from 'express';

const USER = Joi.object({
  username: Joi.string().required().min(3),
  classe: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8),
});

const userMiddleware: RequestHandler = (req, _res, next) => {
  const { error } = USER.validate(req.body);
  if (error) return next(error);
  return next();
};

export default userMiddleware;