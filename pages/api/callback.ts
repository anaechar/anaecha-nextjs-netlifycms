import { IncomingMessage, ServerResponse } from "http";
import { AuthorizationCode } from 'simple-oauth2';

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
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const code = urlParams.get('code');
  const client = new AuthorizationCode(config);
  const tokenParams = {
    code,
    redirect_uri: `https://${host}/api/callback`
  };

  try {
    const accessToken = await client.getToken(tokenParams);
    const token = accessToken.token['access_token'];
    const responseBody = renderBody('success', {
      token
    });

    res.statusCode = 200;
    res.end(responseBody);
  } catch (e) {
    res.statusCode = 200;
    res.end(renderBody("error", e));
  }
};

function renderBody(
  status: string,
  content: {
    token: string;
  }
) {
  return `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(
    content
  )}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
  `;
}