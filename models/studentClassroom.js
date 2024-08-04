import mongoose, { Schema } from 'mongoose';

const StudentClassroomSchema = new Schema({
  CLID_TOKEN: {
    type: String,
    required: true,
  },
  UCID_TOKEN: {
    type: String,
    required: true,
  },
  classroomName: {
    type: String,
    required: true,
  },
  teachersUid: {
    type: String,
    required: true,
  },

});

const StudentClassroom = mongoose.model('StudentClassroom', StudentClassroomSchema);
export default StudentClassroom;
