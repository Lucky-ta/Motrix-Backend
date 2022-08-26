const { Subjects } = require('../db/models');

type SubjectShape = {
    name: string;
    description: string;
}

const getSubjects = async () => {
  const subjects = await Subjects.findAll();

  if (subjects !== null) {
    return { status: 200, data: subjects };
  } return { status: 400, data: { message: 'Error' } };
};

const createSubject = async (subject: SubjectShape) => {
  const newSubject = await Subjects.create(subject);

  if (newSubject !== null) {
    return { status: 200, data: newSubject };
  } return { status: 400, data: { message: 'Error' } };
};

const destroySubject = async (id: number) => {
  const excludeSubject = await Subjects.destroy({ where: { id } });

  if (excludeSubject !== null) {
    return { status: 200 };
  } return { status: 400 };
};

const updateSubject = async (id: number, subject: SubjectShape) => {
  const updatedSubject = await Subjects.update(subject, { where: { id } });

  if (updatedSubject !== null) {
    return { status: 200, data: updatedSubject };
  } return { status: 400, data: { message: 'Error' } };
};

export {
  getSubjects,
  createSubject,
  destroySubject,
  updateSubject,
};
