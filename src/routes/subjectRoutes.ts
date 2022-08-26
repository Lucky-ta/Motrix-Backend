import { Router } from 'express';
import {
  deleteSubject,
  editSubject,
  getAllSubjects,
  getSubjectsById,
  postSubject,
} from '../controllers/subjectControllers';
import { descriptionValidate, nameValidate } from '../middlewares/subjectsMidllewares';

const subjectRouter = Router();

subjectRouter.get('/', getAllSubjects);
subjectRouter.get('/:id', getSubjectsById);

subjectRouter.post(
  '/',
  nameValidate,
  descriptionValidate,

  postSubject,
);

subjectRouter.put(
  '/:id',
  nameValidate,
  descriptionValidate,

  editSubject,
);

subjectRouter.delete('/:id', deleteSubject);

export default subjectRouter;
