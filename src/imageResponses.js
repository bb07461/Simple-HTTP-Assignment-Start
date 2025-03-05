const fs = require('fs');
const path = require('path');

const getImage = (request, response) => {
  const filePath = path.join(__dirname, '../client/spongegar.png');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('500 - Internal Server Error');
    } else {
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.end(data);
    }
  });
};

module.exports = {
  getImage,
};
