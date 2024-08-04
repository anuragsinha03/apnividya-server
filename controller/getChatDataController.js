/* eslint-disable import/extensions */
import getChatDataInteractor from '../interactor/getChatDataInteractor.js';
import getChatDataPersistance from '../persistance/getChatDataPersistance.js';

const getChatDataController = async (request, response) => {
  const { UCID } = request.query;
  try {
    const details = await getChatDataInteractor({ UCID }, { getChatDataPersistance });
    response.status(200).json({
      success: true,
      details,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
    });
  }
};

export default getChatDataController;
