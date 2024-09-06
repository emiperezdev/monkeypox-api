import express from 'express';
import morgan from 'morgan';
import { AppRoutes } from '../presentation/AppRoutes';

const app = express();

app.use(morgan('dev'));

app.use(AppRoutes.routes);

export default app; 