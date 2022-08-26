import { NextFunction, Request, Response } from 'express';
import subjectErrors from './errors/subjectErrors';

const nameValidate = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(404).json(subjectErrors.nameError);
  if (name.length === 0) return res.status(404).json(subjectErrors.nameError);

  return next();
};

const descriptionValidate = (req: Request, res: Response, next: NextFunction) => {
  const { description } = req.body;
  if (!description) return res.status(404).json(subjectErrors.descriptionError);
  if (description.length === 0) return res.status(404).json(subjectErrors.descriptionError);

  return next();
};

export {
  nameValidate,
  descriptionValidate,
};
