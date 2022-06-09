import express from 'express';
import ProductController from '../controllers/productController';
import productMiddleware from '../middlewares/postProduct';

const router = express.Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', productMiddleware, productController.create);

export default router;