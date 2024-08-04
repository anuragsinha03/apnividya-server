/* eslint-disable import/extensions */
import ChatroomSchema from '../models/ChatRoom.js';

const createChatPersistance = async ({ UCID, email, dets }) => {
  const { fullName, UCID_TOKEN } = dets;
  const From = UCID;
  const To = UCID_TOKEN;

  const ChatroomFind = await ChatroomSchema.findOne({ To, From });
  if (!ChatroomFind) {
    const Chatroom = new ChatroomSchema({
      fullName, From, To, recieverEmail: email,
    });
    await Chatroom.save();
  } else {
    throw new Error('The Chat room Exist');
  }
};

export default createChatPersistance;
