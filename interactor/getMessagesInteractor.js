const getMessagesInteractor = async ({ from, to }, { getMessagesPersistance }) => {
  const messages = await getMessagesPersistance({ from, to });
  return messages;
};

export default getMessagesInteractor;
