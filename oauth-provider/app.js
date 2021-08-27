require('dotenv').config({ silent: true })
const express = require('express')
const middleWarez = require('./index.js')
const port = process.env.PORT || 3000

const app = express()

// Initial page redirecting to Github
app.get('/api/auth', middleWarez.auth)

// Callback service parsing the authorization token
// and asking for the access token
app.get('/api/callback', middleWarez.callback)

app.get('/api/success', middleWarez.success)
app.get('/api/', middleWarez.index)

app.listen(port, () => {
  console.log("gandalf is walkin' on port " + port)
})

module.exports = app;
