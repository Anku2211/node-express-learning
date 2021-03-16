const path = require('path');
// separator
console.log(path.sep);
// path.join

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);
// base name

const base = path.basename(filePath);
console.log(base);
// absolute path
const absolutePath = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'test.txt'
);

console.log(absolutePath);
