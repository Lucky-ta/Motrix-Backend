import { Router } from 'express';
import { getAllSubjects } from '../controllers/subjectControllers';

const subjectRouter = Router();

subjectRouter.get('/', getAllSubjects);

export default subjectRouter;
