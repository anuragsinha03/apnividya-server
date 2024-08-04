/* eslint-disable import/extensions */
import ChatroomSchema from '../models/ChatRoom.js';

const getChatDataPersistance = async ({ UCID }) => {
  const isChatPresent = await ChatroomSchema.find({ From: { $eq: UCID } });
  return isChatPresent;
};

export default getChatDataPersistance;
