# node-fs-writefile-promise

[![NPM version](https://img.shields.io/npm/v/node-fs-writefile-promise.svg)](https://www.npmjs.com/package/node-fs-writefile-promise)
[![Build Status](https://travis-ci.org/Stephen-Meyerhofer/node-fs-writefile-promise.svg?branch=master)](https://travis-ci.org/Stephen-Meyerhofer/node-fs-writefile-promise)
[![Build status](https://ci.appveyor.com/api/projects/status/k6gaql1fb3bcjquo?svg=true)](https://ci.appveyor.com/project/Stephen-Meyerhofer/node-fs-writefile-promise)
[![Coverage Status](https://img.shields.io/coveralls/Stephen-Meyerhofer/node-fs-writefile-promise.svg)](https://coveralls.io/r/Stephen-Meyerhofer/node-fs-writefile-promise)
[![Dependency Status](https://david-dm.org/Stephen-Meyerhofer/node-fs-writefile-promise.svg)](https://david-dm.org/Stephen-Meyerhofer/node-fs-writefile-promise)
[![devDependency Status](https://david-dm.org/Stephen-Meyerhofer/node-fs-writefile-promise/dev-status.svg)](https://david-dm.org/Stephen-Meyerhofer/node-fs-writefile-promise#info=devDependencies)

fs.writeFile wrapped in an ES6 Promise

```js
const writeFile = require('node-fs-writefile-promise');

writeFile('path/to/file', 'string or buffer data')
  .then(() => console.log('data written successfully to disk'))
  .catch(err => console.error(err.message));
```

A simple ES6 Promise-based wrapper around Node's built-in [`writeFile`][fs.writeFile].

## Installation

`npm i node-fs-writefile-promise`

[npm install docs](https://docs.npmjs.com/cli/install)

## API

```js
const writeFile = require('node-fs-writefile-promise');
```

### writeFile(_file_, _data_ [, _options_])

_file_: `String` | `Buffer` | `Integer` filename or file descriptor  
_data_: `String` | `Buffer`  
_options_: `Object` | `String` ([fs.writeFile] options)  

Returns: ([Promise][promise])

Once the file is written, the returned promise will be [_resolved_][resolve] with no arguments.

If there is an error, the returned promise will be [_rejected_][reject] with an error as its first argument.

```js
const writeFile = require('node-fs-writefile-promise');

const onFulfilled = () => console.log('File written successfully');
const onRejected = err => console.log('Cannot write to the file');

writeFile('path/to/file', 'string or buffer data').then(onFulfilled, onRejected);

writeFile('path/to/file', 'string or buffer data')
  .then(onFulfilled)
  .catch(onRejected);
```

## License

Copyright (c) 2014 - 2016 [Stephen Meyerhofer](https://github.com/Stephen-Meyerhofer)

Licensed under the [MIT License](./LICENSE).

[fs.writeFile]: https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[resolve]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
[reject]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
