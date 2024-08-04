const validateServicesInteractor = ({ validateJwtPersistance }, { JWT_TOKEN }) => {
  validateJwtPersistance(JWT_TOKEN);
};

export default validateServicesInteractor;
