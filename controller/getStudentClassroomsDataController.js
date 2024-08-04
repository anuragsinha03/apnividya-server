/* eslint-disable import/extensions */
import getStudentClassroomsDataInteractor from '../interactor/getStudentClassroomsDataInteractor.js';
import getStudentClassroomsDataPersistance from '../persistance/getStudentClassroomsDataPersistance.js';

const getStudentClassroomsDataController = async (request, response) => {
  const { UCID } = request.query;

  try {
    const details = await getStudentClassroomsDataInteractor(
      { UCID },
      { getStudentClassroomsDataPersistance },
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

export default getStudentClassroomsDataController;
