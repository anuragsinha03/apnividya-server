const DataSanitizationEntity = class dataSanitization {
  constructor({
    fullName, email, password, userType,
  }) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.userType = userType;
  }

  userDataSanitization() {
    const emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (this.fullName !== undefined && typeof (this.fullName) !== 'string') throw new Error('Full Name not safe');
    if (this.email !== undefined && !(this.email.match(emailPattern))) throw new Error('Email Id not safe');
    if ((this.password !== undefined && !this.password > 6) && typeof (this.password) !== 'string') throw new Error('password not safe');
    if ((this.userType !== undefined && this.userType.toLowerCase() === 'student') && this.userType.toLowerCase() === 'teacher') throw new Error('userType not safe');
    return true;
  }
};
export default DataSanitizationEntity;
