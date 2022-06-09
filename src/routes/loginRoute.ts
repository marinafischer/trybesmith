import express from 'express';
import LoginController from '../controllers/loginController';
import loginMiddleware from '../middlewares/postLogin';

const router = express.Router();

const loginController = new LoginController();

router.post('/', loginMiddleware, loginController.auth);

export default router;