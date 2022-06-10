import Joi from 'joi';
import { RequestHandler } from 'express';

const ORDER = Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required(),
});

const postOrder: RequestHandler = (req, res, next) => {
  const { error } = ORDER.validate(req.body);
  if (error) {
    if (error.message.includes('contain')) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    } 
    return next(error);
  }
  return next();
};

export default postOrder;