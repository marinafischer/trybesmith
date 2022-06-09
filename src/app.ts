import express from 'express';
import productRouter from './routes/productRoutes';

const app = express();

app.use(express.json());

app.unsubscribe('/products', productRouter);

export default app;
