const checkIfUserHasClassroomInteractor = async (
  { UCID },
  { checkIfUserHasClassroomPersistance },
) => {
  await checkIfUserHasClassroomPersistance({ UCID });
};

export default checkIfUserHasClassroomInteractor;
