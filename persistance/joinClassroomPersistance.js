/* eslint-disable import/extensions */
import StudentClassroomSchema from '../models/studentClassroom.js';

const joinClassroomPersistance = async ({
  CLID_TOKEN, teachersUid, classroomName, UCID,
}) => {
  const StudentClassroom = new StudentClassroomSchema({
    CLID_TOKEN, teachersUid, classroomName, UCID_TOKEN: UCID,
  });
  await StudentClassroom.save();
};

export default joinClassroomPersistance;
