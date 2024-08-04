const createChatInteractor = async (
  { UCID, email },
  { validateUserPersistance, createChatPersistance },
) => {
  const dets = await validateUserPersistance({ email });

  await createChatPersistance({ UCID, email, dets });
  return { recieverName: dets.fullName, recieverEmail: dets.email };
};

export default createChatInteractor;
