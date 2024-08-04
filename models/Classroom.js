import mongoose, { Schema } from 'mongoose';

const ClassroomSchema = new Schema({
  CLID_TOKEN: {
    type: String,
    required: true,
    unique: true,
  },
  UCID_TOKEN: {
    type: String,
    required: true,
  },
  classroomName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },

});

const Classroom = mongoose.model('Classroom', ClassroomSchema);
export default Classroom;
