import mongoose, { Schema } from 'mongoose';

const ChatroomSchema = new Schema({

  To: {
    type: String,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  recieverEmail: {
    type: String,
    required: true,
  },

});

const Chatroom = mongoose.model('Chatroom', ChatroomSchema);
export default Chatroom;
