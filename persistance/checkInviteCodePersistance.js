/* eslint-disable import/extensions */
import ClassroomSchema from '../models/Classroom.js';

const checkInviteCodePersistance = async ({ linkCode }) => {
  const isInviteCodeValid = await ClassroomSchema.find({ link: { $eq: linkCode } });
  if (isInviteCodeValid.length === 0) throw new Error('Invalid Invite Code');
  return isInviteCodeValid[0];
};

export default checkInviteCodePersistance;
