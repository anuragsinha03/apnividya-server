const getStudentClassroomsDataInteractor = async (
  { UCID },
  { getStudentClassroomsDataPersistance },
) => {
  const details = await getStudentClassroomsDataPersistance({ UCID });
  return details;
};

export default getStudentClassroomsDataInteractor;
