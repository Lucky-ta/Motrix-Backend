import { Router } from 'express';
import {
  deleteSubject,
  editSubject,
  getAllSubjects,
  getSubjectsById,
  postSubject,
} from '../controllers/subjectControllers';

const subjectRouter = Router();

subjectRouter.get('/', getAllSubjects);
subjectRouter.get('/:id', getSubjectsById);

subjectRouter.post('/', postSubject);

subjectRouter.put('/:id', editSubject);

subjectRouter.delete('/:id', deleteSubject);

export default subjectRouter;
