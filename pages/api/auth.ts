import { IncomingMessage, ServerResponse } from 'http';
import { AuthorizationCode } from 'simple-oauth2';
import { randomBytes } from 'crypto';
import config from '../../configs/oauth';

export const randomString = () => randomBytes(4).toString(`hex`);

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { host } = req.headers;
  const client = new AuthorizationCode(config);
  const authorizationUri = client.authorizeURL({
    redirect_uri: `https://${host}/api/callback`,
    scope: 'repo,user',
    state: randomString()
  });

  res.writeHead(301, { Location: authorizationUri });
  res.end();
};