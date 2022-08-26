import { Request, Response } from 'express';
import { createSubject, destroySubject, getSubjects } from '../services/subjectServices';

const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const response = await getSubjects();
    return res.status(response.status).json(response.data);
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
};

const postSubject = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await createSubject(body);
    return res.status(response.status).json(response.data);
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
};

const deleteSubject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const parsedId = Number(id);

    const response = await destroySubject(parsedId);
    return res.status(response.status).end();
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
};

export {
  getAllSubjects,
  postSubject,
  deleteSubject,
};
