/* eslint-disable import/extensions */
import ClassroomSchema from '../models/Classroom.js';

const checkIfUserHasClassroomPersistance = async ({ UCID }) => {
  const isClassroomPresent = await ClassroomSchema.find({ UCID_TOKEN: { $eq: UCID } });
  if (isClassroomPresent.length === 0) throw new Error('User does not have any classrooms ');
};

export default checkIfUserHasClassroomPersistance;
