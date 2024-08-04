/* eslint-disable import/no-duplicates */
/* eslint-disable new-cap */
// eslint-disable-next-line new-cap
import { v5 as uuidv5 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';

const createMIDPersistance = ({ CLID, meetingDate }) => {
  const NAMESPACE = uuidv4();
  return uuidv5(`${meetingDate}${CLID}`, NAMESPACE);
};

export default createMIDPersistance;
