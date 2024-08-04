// Bussiness Logic

const createUserInteractor = async (
  {
    CreateUserDataEntity, createUserPersistance, DataSanitizationEntity, cidTokenPersitance,
  },
  {
    fullName, email, password, institution, userType,
  },
) => {
  const userData = new CreateUserDataEntity({ password });
  const userDataSanitization = new DataSanitizationEntity({
    fullName, email, password, userType,
  });
  // Data is getting Sanitized
  userDataSanitization.userDataSanitization();
  // hashing the password
  const hashedPassword = await userData.hashPassword();
  // Creating a UCID for identification of an user
  const UCID_TOKEN = cidTokenPersitance({ email });

  // saving the password to DB
  await createUserPersistance({
    UCID_TOKEN, fullName, email, institution, password: hashedPassword, userType,
  });
};

export default createUserInteractor;
