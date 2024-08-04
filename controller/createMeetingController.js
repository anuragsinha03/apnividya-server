/* eslint-disable import/extensions */
import createMeetingInteractor from '../interactor/createMeetingInteractor.js';
import createMeetingPersistance from '../persistance/createMeetingPersistance.js';
import createMIDPersistance from '../persistance/createMIDPersistance.js';

const createMeetingController = async (request, response) => {
  const { meetingName, meetingDate, CLID } = request.body;
  try {
    await createMeetingInteractor(
      { meetingName, meetingDate, CLID },
      { createMeetingPersistance, createMIDPersistance },
    );

    response.status(200).json({
      success: true,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export default createMeetingController;
