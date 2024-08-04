const validateUserInteractor = async (
  {
    ValidateUserDataEntity, validateUserPersistance, createJwt, DataSanitizationEntity,
  },
  { email, password },
) => {
  // TODO : {Data Satanitization, EmailPreset or not, Password Validate or not, Create JWT}
  const hashedPasswordMatch = new ValidateUserDataEntity({ password });
  const userDataSanitization = new DataSanitizationEntity({ email, password });
  userDataSanitization.userDataSanitization();
  const userData = await validateUserPersistance({ email });
  await hashedPasswordMatch.ValidatePassword({ hashedPassword: userData.fetchedHashedPassword });
  const JWT_TOKEN = createJwt({ email, expirationDate: '1h' });
  return {
    fullName: userData.fullName, JWT_TOKEN, UCID_TOKEN: userData.UCID_TOKEN, type: userData.Type,
  };
};
export default validateUserInteractor;
