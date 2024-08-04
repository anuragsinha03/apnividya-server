/* eslint-disable import/extensions */
import joinClassroomsInteractor from '../interactor/joinClassroomsInteractor.js';
import checkInviteCodePersistance from '../persistance/checkInviteCodePersistance.js';
import joinClassroomPersistance from '../persistance/joinClassroomPersistance.js';

async function joinClassroomsController(request, response) {
  const { linkCode, UCID } = request.body;

  try {
    const res = await joinClassroomsInteractor(
      { linkCode, UCID },
      { checkInviteCodePersistance, joinClassroomPersistance },
    );

    response.status(200).json({
      success: true,
      res,
    });
  } catch (error) {
    console.log(error);
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
}

export default joinClassroomsController;
