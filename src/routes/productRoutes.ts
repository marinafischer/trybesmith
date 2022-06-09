import express from 'express';
import ProductController from '../controllers/productController';

const router = express.Router();

const productController = new ProductController();

router.get('/', productController.getAll);

export default router;