const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {
  verifyUser,
  searchbyTitle,
} = require('./helpers');

const app = express();
const port = process.env.port || 3000;

app.get('/search', (req, res) => {
  const title = req.query.title;
  searchbyTitle(title, (err, response) => {
    if (err) {
      throw err;
    }
    res.send(response);
  })
})

app.listen(port, () => {
  console.log('Listening on port:', port);
})
