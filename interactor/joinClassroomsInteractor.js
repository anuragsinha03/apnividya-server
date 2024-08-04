const joinClassroomsInteractor = async (
  { linkCode, UCID },
  { checkInviteCodePersistance, joinClassroomPersistance },
) => {
  const { CLID_TOKEN, UCID_TOKEN, classroomName } = await checkInviteCodePersistance({ linkCode });
  await joinClassroomPersistance({
    CLID_TOKEN, teachersUid: UCID_TOKEN, classroomName, UCID,
  });
  return { CLID_TOKEN, classroomName };
};

export default joinClassroomsInteractor;
