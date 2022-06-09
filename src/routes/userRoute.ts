import express from 'express';
import UserController from '../controllers/userController';
import userMiddleware from '../middlewares/postUser';

const router = express.Router();

const userController = new UserController();

router.post('/', userMiddleware, userController.create);

export default router;