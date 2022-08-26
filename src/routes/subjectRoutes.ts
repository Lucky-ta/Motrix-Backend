import { Router } from 'express';
import { deleteSubject, getAllSubjects, postSubject } from '../controllers/subjectControllers';

const subjectRouter = Router();

subjectRouter.get('/', getAllSubjects);

subjectRouter.post('/', postSubject);

subjectRouter.delete('/:id', deleteSubject);

export default subjectRouter;
