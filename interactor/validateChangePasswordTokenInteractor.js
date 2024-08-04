const validateChangePasswordTokenInteractor = async ({
  DataSanitizationEntity,
  vaildateJwtPersistance,
  DecodeJwtEntity,
  CreateUserDataEntity,
  resetPasswordPersistance,
}, { password, PASSWORD_CHANGE_TOKEN }) => {
  // Data Sanitaztion
  const UserData = new DataSanitizationEntity({ password });
  UserData.userDataSanitization();
  // Validating JWT
  vaildateJwtPersistance(PASSWORD_CHANGE_TOKEN);
  // Decoding the Email Id from JWT token
  const DecodeJwt = new DecodeJwtEntity({ PASSWORD_CHANGE_TOKEN });
  const emailId = DecodeJwt.decodeJWT();
  // Hashing The password
  const HashingPass = new CreateUserDataEntity({ password });
  const hashedPassword = await HashingPass.hashPassword();
  // Reseting The password
  await resetPasswordPersistance({ emailId, hashedPassword });
};

export default validateChangePasswordTokenInteractor;
