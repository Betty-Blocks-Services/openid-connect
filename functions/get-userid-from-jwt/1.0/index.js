import jwtDecode from 'jwt-decode';

const getUseridFromJwt = async ({ jwtToken }) => {
  const decodedToken = jwtDecode(jwtToken.jwtToken);

  return { result: decodedToken.user_id };
};

export default getUseridFromJwt;
