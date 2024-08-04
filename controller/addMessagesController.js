/* eslint-disable import/extensions */
import addMessageInteractor from '../interactor/addMessageInteractor.js';
import createMessagePersistance from '../persistance/createMessagePersistance.js';

const addMessagesController = async (request, response) => {
  try {
    const { from, to, message } = request.body;
    await addMessageInteractor({ from, to, message }, { createMessagePersistance });

    response.status(200).json({
      success: true,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
    });
  }
};

export default addMessagesController;
