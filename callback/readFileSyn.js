const fs = require('fs');

const data = fs.readFileSync('../.gitignore')
console.log(data.toString());
console.log('ok')
