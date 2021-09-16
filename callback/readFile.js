const fs = require('fs');

fs.readFile('../.gitignore', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });


  
  console.log("ok")