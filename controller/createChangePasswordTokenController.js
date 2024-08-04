/* eslint-disable import/extensions */
import createChangePasswordTokenInteractor from '../interactor/createChangePasswordTokenInteractor.js';
import DataSanitizationEntity from '../entity/dataSanitizationEnitity.js';
import validateUserPersistance from '../persistance/validateUserPersistance.js';
import createJwt from '../persistance/createJwt.js';
import sendPasswordTokenPersistance from '../persistance/sendPasswordTokenPersistance.js';

const createChangePasswordTokenController = async (request, response) => {
  const { email } = request.body;
  try {
    await createChangePasswordTokenInteractor(
      {
        DataSanitizationEntity,
        validateUserPersistance,
        createJwt,
        sendPasswordTokenPersistance,
      },
      { email },
    );
    response.status(200).json({
      success: 'true',
      message: 'Email sent Succesfully',
    });
  } catch (error) {
    response.status(401).json({
      success: 'false',
      err: error.message,
    });
  }
};

export default createChangePasswordTokenController;
