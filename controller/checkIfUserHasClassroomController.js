/* eslint-disable import/extensions */
import checkIfUserHasClassroomInteractor from '../interactor/checkIfUserHasClassroomInteractor.js';
import checkIfUserHasClassroomPersistance from '../persistance/checkIfUserHasClassroomPersistance.js';

const checkIfUserHasClassroomController = async (request, response) => {
  const { UCID } = request.query;

  try {
    await checkIfUserHasClassroomInteractor({ UCID }, { checkIfUserHasClassroomPersistance });

    response.status(200).json({
      success: true,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
    });
  }
};

export default checkIfUserHasClassroomController;
