/* eslint-disable import/extensions */
import MeetingSchema from '../models/Meetings.js';

const createMeetingPersistance = async ({
  CLID, meetingName, meetingDate, MID,
}) => {
  const Meeting = new MeetingSchema({
    CLID_TOKEN: CLID,
    MID_TOKEN: MID,
    meetingName,
    meetingDate,
  });
  await Meeting.save();
};

export default createMeetingPersistance;
