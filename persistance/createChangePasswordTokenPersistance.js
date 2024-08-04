import crypto from 'crypto';

const createChangePasswordTokenPersistance = () => crypto.randomUUID();

export default createChangePasswordTokenPersistance;
