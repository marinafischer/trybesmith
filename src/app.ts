import express from 'express';
import productRouter from './routes/productRoute';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';
import loginRoute from './routes/loginRoute';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);

app.use(errorMiddleware);

export default app;
