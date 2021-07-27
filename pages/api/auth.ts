import { IncomingMessage, ServerResponse } from 'http';
import { AuthorizationCode } from 'simple-oauth2';
import { randomBytes } from 'crypto';

export const randomString = () => randomBytes(4).toString(`hex`);

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { host } = req.headers;
  const config = {
    client: {
      id: process.env.OAUTH_GITHUB_CLIENT_ID,
      secret: process.env.OAUTH_GITHUB_CLIENT_SECRET
    },
    auth: {
      tokenHost: 'https://github.com',
      tokenPath: '/login/oauth/access_token',
      authorizePath: '/login/oauth/authorize'
    }
  };
  const client = new AuthorizationCode(config);
  const authorizationUri = client.authorizeURL({
    redirect_uri: `https://${host}/api/callback`,
    scope: 'repo,user',
    state: randomString()
  });

  res.writeHead(301, { Location: authorizationUri });
  res.end();
};