/* eslint-disable import/extensions */
import UserSchema from '../models/User.js';

const createUserPersistance = async ({
  UCID_TOKEN, fullName, email, institution, password, userType,
}) => {
  const User = new UserSchema({
    UCID_TOKEN, fullName, email, institution, password, userType,
  });
  await User.save();
};

export default createUserPersistance;
