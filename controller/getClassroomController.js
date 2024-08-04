/* eslint-disable import/extensions */
import getClassroomInteractor from '../interactor/getClassroomInteractor.js';
import getClassroomPersistance from '../persistance/getClassroomPersistance.js';
import getClassroomMeetingDataPersistance from '../persistance/getClassroomMeetingDataPersistance.js';

const getClassroomController = async (request, response) => {
  const { CLID } = request.query;
  try {
    const details = await getClassroomInteractor(
      { CLID },
      { getClassroomPersistance, getClassroomMeetingDataPersistance },
    );

    response.status(200).json({
      success: true,
      details,
    });
  } catch (error) {
    response.status(200).json({
      success: false,
      error: error.message,
    });
  }
};

export default getClassroomController;
