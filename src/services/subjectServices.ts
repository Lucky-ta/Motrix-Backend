const { Subjects } = require('../db/models');

const getSubjects = async () => {
  const subjects = await Subjects.findAll();

  if (subjects !== null) {
    return { status: 200, data: subjects };
  } return { status: 400, data: { message: 'Error' } };
};

export {
  getSubjects,
};
