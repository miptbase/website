require('dotenv').config({ silent: true })
const express = require('express')
const middleWarez = require('./index.js')
const port = process.env.PORT || 3000

const app = express()

// Initial page redirecting to Github
app.get('/auth', middleWarez.auth)

// Callback service parsing the authorization token
// and asking for the access token
app.get('/oauth-provider/callback', middleWarez.callback)

app.get('/oauth-provider/success', middleWarez.success)
app.get('/oauth-provider/', middleWarez.index)

app.listen(port, () => {
  console.log("gandalf is walkin' on port " + port)
})

module.exports = app;
