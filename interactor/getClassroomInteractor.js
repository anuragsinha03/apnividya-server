const getClassroomInteractor = async (
  { CLID },
  { getClassroomPersistance, getClassroomMeetingDataPersistance },
) => {
  const classroomdetails = await getClassroomPersistance({ CLID });

  const meetingDetails = await getClassroomMeetingDataPersistance({ CLID });
  return { classroomdetails, meetingDetails };
};

export default getClassroomInteractor;
