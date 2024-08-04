/* eslint-disable import/extensions */

import UserSchema from '../models/User.js';

const acceptChatPersistance = ({ UCID }) => {
  const dets = UserSchema.find({ UCID_TOKEN: { $eq: UCID } });
  return dets;
};

export default acceptChatPersistance;
