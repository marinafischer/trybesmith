import express from 'express';
import productRouter from './routes/productRoute';
import userRoute from './routes/userRoute';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRoute);

app.use(errorMiddleware);

export default app;
