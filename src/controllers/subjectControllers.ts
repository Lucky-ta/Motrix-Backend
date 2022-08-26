import { Request, Response } from 'express';
import { getSubjects } from '../services/subjectServices';

const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const response = await getSubjects();
    return res.status(response.status).json(response.data);
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
};

export {
  getAllSubjects,
};
