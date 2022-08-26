import express, { Express } from 'express';
import subjectRouter from './routes/subjectRoutes';

const app: Express = express();

app.use(express.json());

app.use('/subject', subjectRouter);

export default app;
