/* eslint-disable import/extensions */
import validateJwtPersistance from '../persistance/vaildateJwtPersistance.js';
import validateServicesInteractor from '../interactor/validateServicesInteractor.js';

const validateProtectedPagesController = (request, response) => {
  const JWT_TOKEN = request.headers.authorization.split(' ')[1];
  try {
    validateServicesInteractor({ validateJwtPersistance }, { JWT_TOKEN });
    response.status(200).json({
      success: 'true',
    });
  } catch (error) {
    response.status(401).json({
      err: error.message,
    });
  }
};

export default validateProtectedPagesController;
