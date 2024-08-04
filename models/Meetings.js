import mongoose, { Schema } from 'mongoose';

const MeetingSchema = new Schema({
  CLID_TOKEN: {
    type: String,
    required: true,

  },
  MID_TOKEN: {
    type: String,
    required: true,
    unique: true,
  },
  meetingName: {
    type: String,
    required: true,
  },
  meetingDate: {
    type: Date,
    required: true,
  },

});

const Meeting = mongoose.model('Meeting', MeetingSchema);
export default Meeting;
