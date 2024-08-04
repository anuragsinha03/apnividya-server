/* eslint-disable import/extensions */
import getNotificationDataInteractor from '../interactor/getNotificationDataInteractor.js';
import getNotificationDataPersistance from '../persistance/getNotificationDataPersistance.js';

const getNotificationDataController = async (request, response) => {
  const { UCID } = request.query;
  try {
    const details = await getNotificationDataInteractor(
      { UCID },
      { getNotificationDataPersistance },
    );
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

export default getNotificationDataController;
