// import express from 'express';
// import request from 'request-promise';

const express = require('express');
const request = require('request-promise');

const app = express();
const gbSearch = {
  url:'https://www.googleapis.com/books/v1/volumes?q=',
  key: 'AIzaSyCpT7qNT_ZLCxrZX6k0eu1pi3m1_u_ruwc',
};

const verifyUser = () => {

}

const searchbyTitle = (title, callback) => {
  const query = `${gbSearch.url}${title}&key=${gbSearch.key}`;
  request(query)
    .then(results => {
      callback(null, results);
    })
    .catch(err => {
      throw err;
    });
};

// export default {
//   verifyUser,
//   searchbyTitle,
// }

module.exports = {
  verifyUser,
  searchbyTitle,
}
