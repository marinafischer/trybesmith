import express from 'express';
import productRouter from './routes/productRoute';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use(errorMiddleware);

export default app;
