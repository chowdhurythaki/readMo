const express = require('express');
const request = require('request-promise');

const gbKey = require('../keys/googleBooks');

const app = express();
const gbSearch = {
  url:'https://www.googleapis.com/books/v1/volumes?q=',
  key: gbKey,
};

const verifyUser = () => {

}

const searchbyTitle = (title, callback) => {
  const query = `${gbSearch.url}${title}&key=${gbSearch.key}`;
  request(query)
    .then(response => {
      const parsedResponse = JSON.parse(response);
      // filter for relevant fields
      const filtered = parsedResponse.items.reduce((accum, book) =>
        {
          if (book.volumeInfo.pageCount) {
            const {
              title,
              authors,
              description,
              pageCount,
              publishedDate,
            } = book.volumeInfo;

            accum.push({
              title,
              authors,
              description,
              pageCount,
              publishedDate,
              thumbnail: book.volumeInfo.imageLinks.thumbnail,
            });
          }
          return accum;
        }, []);

      callback(null, filtered);
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
