const createClassroomInteractor = async (
  { classroomName, JWT_TOKEN, UCID_TOKEN },
  {
    CreateClassroomPersistance,
    vaildateJwtPersistance,
    inviteLinkCreationPersistance,
    clidTokenPersitance,
  },
) => {
  vaildateJwtPersistance(JWT_TOKEN);
  const clid = await clidTokenPersitance({ classroomName, UCID_TOKEN });
  const link = await inviteLinkCreationPersistance({ clid });
  await CreateClassroomPersistance({
    clid, link, classroomName, UCID_TOKEN,
  });
  return { link, clid };
};

export default createClassroomInteractor;
