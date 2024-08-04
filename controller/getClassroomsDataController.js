/* eslint-disable import/extensions */
import getClassroomsDataInteractor from '../interactor/getClassroomsDataInteractor.js';
import getClassroomsDataPersistance from '../persistance/getClassroomsDataPersistance.js';

const getClassroomsDataController = async (request, response) => {
  const { UCID } = request.query;

  try {
    const details = await getClassroomsDataInteractor({ UCID }, { getClassroomsDataPersistance });

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

export default getClassroomsDataController;
