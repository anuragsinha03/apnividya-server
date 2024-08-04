/* eslint-disable import/extensions */
import Message from '../models/Message.js';

const getMessagesPersistance = async ({ from, to }) => {
  const messages = await Message.find({
    users: {
      $all: [from, to],
    },
  }).sort({ updatedAt: 1 });

  const projectedMessages = messages.map((msg) => ({
    fromSelf: msg.sender.toString() === from,
    messages: msg.message.text,
  }));
  return projectedMessages;
};

export default getMessagesPersistance;
