/* eslint-disable import/extensions */
import ChatroomSchema from '../models/ChatRoom.js';

const getNotificationDataPersistance = async ({ UCID }) => {
  const isChatPresent = await ChatroomSchema.find({ To: { $eq: UCID } });
  return isChatPresent;
};

export default getNotificationDataPersistance;
