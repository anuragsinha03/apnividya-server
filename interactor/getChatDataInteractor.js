const getChatDataInteractor = async ({ UCID }, { getChatDataPersistance }) => {
  const response = await getChatDataPersistance({ UCID });
  return response;
};

export default getChatDataInteractor;
