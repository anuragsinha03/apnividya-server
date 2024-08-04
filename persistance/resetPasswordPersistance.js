/* eslint-disable import/extensions */
import UserSchema from '../models/User.js';

const resetPasswordPersistance = async ({ emailId, hashedPassword }) => {
  await UserSchema.updateOne({ email: emailId }, { $set: { password: hashedPassword } });
};

export default resetPasswordPersistance;
