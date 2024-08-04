const inviteLinkCreationPersistance = ({ clid }) => {
  let link = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    link += clid[i];
  }
  return link;
};

export default inviteLinkCreationPersistance;
