/* eslint-disable import/extensions */
import ClassroomSchema from '../models/Classroom.js';

const CreateClassroomPersistance = async ({
  clid, link, classroomName, UCID_TOKEN,
}) => {
  const Classroom = new ClassroomSchema({
    CLID_TOKEN: clid, UCID_TOKEN, classroomName, link,
  });
  await Classroom.save();
};

export default CreateClassroomPersistance;
