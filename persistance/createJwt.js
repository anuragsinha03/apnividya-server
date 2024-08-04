/* eslint-disable max-len */
import jwt from 'jsonwebtoken';

const createJwt = ({ email, expirationDate }) => jwt.sign({ data: email }, process.env.JWT_SECRET, { expiresIn: expirationDate });

export default createJwt;
