const { readFile } = require('fs');

const readJSON = (addr, cb) =>
  readFile(addr, (err, data) => cb(err, JSON.parse(data.toString())));

module.exports = {
  readJSON,
};
