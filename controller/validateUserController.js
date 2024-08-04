/* eslint-disable import/extensions */
import validateUserInteractor from '../interactor/validateUserInteractor.js';
import ValidateUserDataEntity from '../entity/validateUserDataEntity.js';
import validateUserPersistance from '../persistance/validateUserPersistance.js';
import createJwt from '../persistance/createJwt.js';
import DataSanitizationEntity from '../entity/dataSanitizationEnitity.js';

const validateUserController = async (request, response) => {
  const { email, password } = request.body;
  try {
    const userData = await validateUserInteractor(
      {
        ValidateUserDataEntity, validateUserPersistance, createJwt, DataSanitizationEntity,
      },
      { email, password },
    );
    response.status(200).json({ success: 'true', userData });
  } catch (error) {
    response.status(400).json({
      success: 'false',
      err: error.message,
    });
  }
};

export default validateUserController;
