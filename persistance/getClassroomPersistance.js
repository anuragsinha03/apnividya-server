/* eslint-disable import/extensions */
import ClassroomSchema from '../models/Classroom.js';

const getClassroomPersistance = async ({ CLID }) => {
  const isClassroomPresent = await ClassroomSchema.findOne({ CLID_TOKEN: { $eq: CLID } });
  if (isClassroomPresent.length <= 0) throw new Error('Classroom not found');
  return {
    classroomName: isClassroomPresent.classroomName,
    link: isClassroomPresent.link,
  };
};

export default getClassroomPersistance;
