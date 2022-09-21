// path
const path = require('path');
const string = __filename;
console.log(path.join('/a/', '/b/c/'));
console.log(path.resolve('/a/', '/b/c/'));
