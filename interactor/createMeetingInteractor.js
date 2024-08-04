const createMeetingInteractor = async (
  { meetingName, meetingDate, CLID },
  { createMeetingPersistance, createMIDPersistance },
) => {
  try {
    const MID = createMIDPersistance({ CLID, meetingDate });
    await createMeetingPersistance({
      CLID, meetingName, meetingDate, MID,
    });
  } catch (error) {
    throw new Error('Something went Wrong ');
  }
};

export default createMeetingInteractor;
