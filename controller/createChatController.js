/* eslint-disable import/extensions */
import createChatInteractor from '../interactor/createChatInteractor.js';

import createChatPersistance from '../persistance/createChatPersistance.js';
import validateUserPersistance from '../persistance/validateUserPersistance.js';

const createChatController = async (request, response) => {
  const { UCID, emailId } = request.body;
  try {
    const res = await createChatInteractor(
      { UCID, email: emailId },
      { validateUserPersistance, createChatPersistance },
    );

    response.status(200).json({
      success: true,
      res,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export default createChatController;
