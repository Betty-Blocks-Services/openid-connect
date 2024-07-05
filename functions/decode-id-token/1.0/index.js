import jwtDecode from 'jwt-decode';

const decodeIdToken = async ({ idToken }) => {
  return { decodedIdToken: jwtDecode(idToken) };
};

export default decodeIdToken;
