import mongoose, { Schema } from 'mongoose';

const MessagesSchema = new Schema(
  {
    message: {
      text: {
        type: String,
        required: true,
      },

    },
    users: Array,
    sender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },

);

const Message = mongoose.model('Message', MessagesSchema);
export default Message;
