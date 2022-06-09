import express from 'express';
import OrderController from '../controllers/orderController';

const router = express.Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

export default router;