const getAccessAndIdToken = async ({
  tokenEndpoint,
  clientId,
  clientSecret,
  redirectUri,
  code,
}) => {
  const formBody = Object.entries({
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
    code: code,
  }).map(
    ([property, value]) =>
      encodeURIComponent(property) + '=' + encodeURIComponent(value),
  );

  const accessTokenResponse = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody.join('&'),
  });

  if (!accessTokenResponse.ok) {
    throw new Error(await accessTokenResponse.text());
  }

  const accessToken = await accessTokenResponse.json();

  return {
    accessToken: accessToken.access_token,
    idToken: accessToken.id_token,
    refreshToken: accessToken.refresh_token,
  };
};

export default getAccessAndIdToken;
