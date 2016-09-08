'use strict';

const fs = require('graceful-fs');
const test = require('tape');
const writeFile = require('.');

test('fsWriteFilePromise()', t => {
  t.plan(8);

  writeFile('test1.txt', 'string or buffer data').then(() => {
    fs.readFile('test1.txt', (err, data) => {
      fs.unlink('test1.txt', () => {
        t.deepEqual(data, new Buffer('string or buffer data'), 'should write a file.');
      });
    });
  });

  writeFile('test2.txt', 'string or buffer data', 'utf8').then(() => {
    fs.readFile('test2.txt', (err, data) => {
      fs.unlink('test2.txt', () => {
        t.deepEqual(data, new Buffer('string or buffer data'), 'should work fine with encoding.');
      });
    });
  });

  writeFile('unknown/path/to/test3.txt', 'string or buffer data').catch(err => {
    t.strictEqual(err.code, 'ENOENT', 'should be rejected when the path doesn\'t exist.');
  });

  writeFile('test4.txt', 'first string or buffer data').then(() => {
    writeFile('test4.txt', 'second string or buffer data').then(() => {
      fs.readFile('test4.txt', (err, data) => {
        fs.unlink('test4.txt', () => {
          t.deepEqual(data, new Buffer('second string or buffer data'), 'should overwrite a file.');
        });
      });
    });
  });

  writeFile(true).catch(err => {
    t.strictEqual(err.name, 'TypeError', 'should throw a type error when the path isn\'t a string.');
  });

  writeFile('test6.txt', 'string or buffer data', {encoding: 'foo'}).catch(err => {
    t.strictEqual(
      err.message.includes('Unknown encoding: foo'),
      true,
      'should throw an error when the encoding is not supported.'
    );
  });

  writeFile('test7.txt', 'string or buffer data', true).catch(err => {
    t.strictEqual(
      err.message.includes('got boolean instead'),
      true,
      'should throw a type error when the third argument is not a string or an object.'
    );
  });

  writeFile().catch(err => {
    t.strictEqual(err.name, 'TypeError', 'should throw a type error when it takes no arguments.');
  });
});
