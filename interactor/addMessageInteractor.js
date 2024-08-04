const addMessageInteractor = async ({ from, to, message }, { createMessagePersistance }) => {
  await createMessagePersistance({ from, to, message });
};

export default addMessageInteractor;
