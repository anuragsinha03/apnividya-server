/* eslint-disable import/extensions */
import MettingSchema from '../models/Meetings.js';

const getClassroomMeetingDataPersistance = async ({ CLID }) => {
  const isMeetingPresent = await MettingSchema.find({ CLID_TOKEN: { $eq: CLID } });
  return isMeetingPresent;
};

export default getClassroomMeetingDataPersistance;
