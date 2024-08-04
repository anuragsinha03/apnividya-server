// eslint-disable-next-line new-cap
const cidTokenPersitance = ({ email }) => new Buffer.from(email).toString('base64');
export default cidTokenPersitance;
