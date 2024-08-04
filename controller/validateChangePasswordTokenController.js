/* eslint-disable import/extensions */
import validateChangePasswordTokenInteractor from '../interactor/validateChangePasswordTokenInteractor.js';
import DataSanitizationEntity from '../entity/dataSanitizationEnitity.js';
import vaildateJwtPersistance from '../persistance/vaildateJwtPersistance.js';
import DecodeJwtEntity from '../entity/DecodeJwtEntity.js';
import CreateUserDataEntity from '../entity/createUserDataEntity.js';
import resetPasswordPersistance from '../persistance/resetPasswordPersistance.js';

const validateChangePasswordTokenController = async (request, response) => {
  try {
    const { password } = request.body;
    const PASSWORD_CHANGE_TOKEN = request.headers.authorization.split(' ')[1];
    await validateChangePasswordTokenInteractor({
      DataSanitizationEntity,
      vaildateJwtPersistance,
      DecodeJwtEntity,
      CreateUserDataEntity,
      resetPasswordPersistance,
    }, { password, PASSWORD_CHANGE_TOKEN });

    response.status(200).json({
      success: 'true',
    });
  } catch (error) {
    response.status(401).json({
      success: 'false',
      err: error.message,
    });
  }
};

export default validateChangePasswordTokenController;
