/* eslint-disable import/extensions */
import ClassroomSchema from '../models/Classroom.js';

const getClassroomsDataPersistance = async ({ UCID }) => {
  const isClassroomsPresent = await ClassroomSchema.find({ UCID_TOKEN: { $eq: UCID } });
  return isClassroomsPresent;
};

export default getClassroomsDataPersistance;
