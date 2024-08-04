/* eslint-disable import/extensions */
import CreateClassroomPersistance from '../persistance/CreateClassroomPersistance.js';
import createClassroomInteractor from '../interactor/createClassroomInteractor.js';
import vaildateJwtPersistance from '../persistance/vaildateJwtPersistance.js';
import inviteLinkCreationPersistance from '../persistance/inviteLinkCreationPersistance.js';
import clidTokenPersitance from '../persistance/clidTokenPersistance.js';

const createClassroomController = async (request, response) => {
  const { classroomName, JWT_TOKEN, UCID_TOKEN } = request.body;

  try {
    const details = await createClassroomInteractor(
      { classroomName, JWT_TOKEN, UCID_TOKEN },
      {
        CreateClassroomPersistance,
        vaildateJwtPersistance,
        inviteLinkCreationPersistance,
        clidTokenPersitance,
      },
    );

    response.status(200).json({
      success: 'True',
      details,
    });
  } catch (error) {
    response.status(400).json({
      success: 'false',
      error: error.message,
    });
  }
};

export default createClassroomController;
