import Jwt from 'jsonwebtoken';

const vaildateJwtPersistance = (JWT_TOKEN) => {
  Jwt.verify(JWT_TOKEN, process.env.JWT_SECRET);
};

export default vaildateJwtPersistance;
