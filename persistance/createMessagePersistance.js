/* eslint-disable import/extensions */
import Message from '../models/Message.js';

const createMessagePersistance = async ({ from, to, message }) => {
  await Message.create({
    message: { text: message },
    users: [from, to],
    sender: from,
  });
};

export default createMessagePersistance;
