import { Router } from 'express';
import { getAllSubjects, postSubject } from '../controllers/subjectControllers';

const subjectRouter = Router();

subjectRouter.get('/', getAllSubjects);

subjectRouter.post('/', postSubject);

export default subjectRouter;
