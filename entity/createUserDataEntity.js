import bcrypt from 'bcryptjs';

const CreateUserDataEntity = class CreateUserDataEntity {
  constructor({ password }) {
    this.password = password;
  }

  hashPassword = async () => {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    return hashedPassword;
  };
};

export default CreateUserDataEntity;
