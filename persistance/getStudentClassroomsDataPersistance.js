/* eslint-disable import/extensions */
import StudentClassroomSchema from '../models/studentClassroom.js';

const getStudentClassroomsDataPersistance = async ({ UCID }) => {
  const isClassroomsPresent = await StudentClassroomSchema.find({ UCID_TOKEN: { $eq: UCID } });
  return isClassroomsPresent;
};

export default getStudentClassroomsDataPersistance;
