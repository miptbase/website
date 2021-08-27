const simpleOauthModule = require('simple-oauth2')
const authMiddleWareInit = require('./auth.js')
const callbackMiddleWareInit = require('./callback')
const oauthProvider = process.env.OAUTH_PROVIDER || 'github'
const loginAuthTarget = process.env.AUTH_TARGET || '_self'

const oauth2 = simpleOauthModule.create({
  client: {
    id: process.env.OAUTH_CLIENT_ID,
    secret: process.env.OAUTH_CLIENT_SECRET
  },
  auth: {
    // Supply GIT_HOSTNAME for enterprise github installs.
    tokenHost: process.env.GIT_HOSTNAME || 'https://github.com',
    tokenPath: process.env.OAUTH_TOKEN_PATH || '/login/oauth/access_token',
    authorizePath: process.env.OAUTH_AUTHORIZE_PATH || '/login/oauth/authorize'
  }
})

function indexMiddleWare (req, res) {
  res.send(`Hello<br>
    <a href="/auth" target="${loginAuthTarget}">
      Log in with ${oauthProvider.toUpperCase()}
    </a>`)
}

const auth = authMiddleWareInit(oauth2);
const callback = callbackMiddleWareInit(oauth2, oauthProvider);
const success = (req, res) => { res.send('') };
const index = indexMiddleWare;

require('dotenv').config({ silent: true })
const express = require('express')
const port = process.env.PORT || 3000

const app = express()

// Initial page redirecting to Github
app.get('/oauth-provider/auth', auth)

// Callback service parsing the authorization token
// and asking for the access token
app.get('/oauth-provider/callback', callback)

app.get('/oauth-provider/success', success)
app.get('/oauth-provider', index)

app.listen(port, () => {
  console.log("gandalf is walkin' on port " + port)
})

module.exports = app;
