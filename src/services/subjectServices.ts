const { Subjects } = require('../db/models');

type SubjectShape = {
    name: string;
    description: string;
}

const validateRequestResult = (result: any) => {
  if (result !== null) {
    return { status: 200, data: result };
  } return { status: 400, data: { message: 'Error' } };
};

const getSubjects = async () => {
  const subjects = await Subjects.findAll();
  return validateRequestResult(subjects);
};

const createSubject = async (subject: SubjectShape) => {
  const newSubject = await Subjects.create(subject);
  return validateRequestResult(newSubject);
};

const destroySubject = async (id: number) => {
  const excludeSubject = await Subjects.destroy({ where: { id } });

  if (excludeSubject !== null) {
    return { status: 200 };
  } return { status: 400 };
};

const updateSubject = async (id: number, subject: SubjectShape) => {
  const updatedSubject = await Subjects.update(subject, { where: { id } });
  return validateRequestResult(updatedSubject);
};

const getSubject = async (subjectId: number) => {
  const subjects = await Subjects.findByPk(subjectId);
  return validateRequestResult(subjects);
};

export {
  getSubjects,
  createSubject,
  destroySubject,
  updateSubject,
  getSubject,
};
