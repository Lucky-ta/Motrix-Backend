import { Router } from 'express';
import {
  deleteSubject,
  editSubject,
  getAllSubjects,
  postSubject,
} from '../controllers/subjectControllers';

const subjectRouter = Router();

subjectRouter.get('/', getAllSubjects);

subjectRouter.post('/', postSubject);

subjectRouter.put('/:id', editSubject);

subjectRouter.delete('/:id', deleteSubject);

export default subjectRouter;
