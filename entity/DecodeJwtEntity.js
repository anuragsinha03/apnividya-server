const DecodeJwtEntity = class DecodeJwtEntity {
  constructor({ PASSWORD_CHANGE_TOKEN }) {
    this.PASSWORD_CHANGE_TOKEN = PASSWORD_CHANGE_TOKEN;
  }

  decodeJWT() {
    const EMAIL_ID_BASE_64 = Buffer.from(JSON.stringify(this.PASSWORD_CHANGE_TOKEN.split('.')[1]), 'base64');
    const EMAIL_ID = JSON.parse(EMAIL_ID_BASE_64.toString());
    return EMAIL_ID.data;
  }
};

export default DecodeJwtEntity;
