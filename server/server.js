// import express from 'express';
// import bodyParser from 'bodyParser';
// import path from 'path';
// import {
//   verifyUser,
//   searchbyTitle,
// } from './helpers';

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
  // console.log(req.query.title);
  const title = req.query.title;
  searchbyTitle(title, (err, response) => {
    if (err) {
      throw err;
    }
    const parsedResponse = JSON.parse(response);
    const mapped = parsedResponse.items.map(book => {
      const info = book.volumeInfo;
      return {
        title: info.title,
        authors: info.authors,
        description: info.description,
        thumbnail: info.imageLinks.thumbnail,
        pageCount: info.pageCount,
        publishDate: info.publishedDate,
      };
    });
    res.send(mapped);
  })
})

app.listen(port, () => {
  console.log('Listening on port:', port);
})
