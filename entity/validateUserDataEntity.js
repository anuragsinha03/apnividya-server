import bcrypt from 'bcryptjs';

const ValidateUserDataEntity = class ValidateUserDataEntity {
  constructor({ password }) {
    this.password = password;
  }

  ValidatePassword = async ({ hashedPassword }) => {
    const isMatched = await bcrypt.compare(this.password, hashedPassword);
    if (!isMatched) throw new Error('Password Does not match');
  };
};
export default ValidateUserDataEntity;
