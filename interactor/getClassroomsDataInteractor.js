const getClassroomsDataInteractor = async ({ UCID }, { getClassroomsDataPersistance }) => {
  const details = await getClassroomsDataPersistance({ UCID });
  return details;
};

export default getClassroomsDataInteractor;
