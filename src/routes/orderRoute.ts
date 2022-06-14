import express from 'express';
import OrderController from '../controllers/orderController';
import authMiddleware from '../middlewares/authMiddleware';
import postOrder from '../middlewares/postOrder';

const router = express.Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post(
  '/', 
  authMiddleware, 
  postOrder, 
  orderController.create,
);

export default router;