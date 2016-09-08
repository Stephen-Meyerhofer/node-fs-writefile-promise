'use strict';

const fs = require('graceful-fs');

module.exports = function fsWriteFilePromise(file, data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, options, err => err ? reject( err ) : resolve( ) );
  });
};
