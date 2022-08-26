import { NextFunction, Request, Response } from 'express';

const nameValidate = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) return res.status(404).json({ message: 'Nome nao deve ser nulo' });
  if (name.length === 0) return res.status(404).json({ message: 'Nome nao deve ser nulo' });
  return next();
};

const descriptionValidate = (req: Request, res: Response, next: NextFunction) => {
  const { description } = req.body;

  if (!description) {
    return res
      .status(404)
      .json({ message: 'Descrição nao deve ser nulo' });
  }

  if (description.length === 0) {
    return res
      .status(404)
      .json({ message: 'Descrição nao deve ser nulo' });
  }
  return next();
};

export {
  nameValidate,
  descriptionValidate,
};
