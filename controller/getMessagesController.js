/* eslint-disable import/extensions */
import getMessagesInteractor from '../interactor/getMessagesInteractor.js';
import getMessagesPersistance from '../persistance/getMessagesPersistance.js';

const getMessagesController = async (request, response) => {
  try {
    const { from, to } = request.body;
    const messages = await getMessagesInteractor({ from, to }, { getMessagesPersistance });

    response.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
    });
  }
};

export default getMessagesController;
