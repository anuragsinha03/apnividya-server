const getNotificationDataInteractor = async ({ UCID }, { getNotificationDataPersistance }) => {
  const response = await getNotificationDataPersistance({ UCID });
  return response;
};

export default getNotificationDataInteractor;
