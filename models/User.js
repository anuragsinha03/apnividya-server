import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  UCID_TOKEN: {
    type: String,
    unique: true,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: [true, 'email already exist'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  institution: {
    type: String,
  },
  userType: {
    type: String,
    required: [true, 'User Type is required'],
  },

});

const User = model('User', UserSchema);
export default User;
