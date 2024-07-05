const getUserDataFromIdToken = async ({
  usernameAttribute,
  nameAttribute,
  idToken,
  hdAttribute,
}) => {
  return {
    username: idToken[usernameAttribute],
    name: idToken[nameAttribute],
    domain: idToken[hdAttribute],
  };
};

export default getUserDataFromIdToken;
