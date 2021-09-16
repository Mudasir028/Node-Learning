const fs = require('fs');

function readFile(filePath) {
    // callback waly function ko hm promise base bna sktay han. is tra
    return new Promise((resolve, rejects) =>{
        fs.readFile(filePath, (err, data) => {
        if (err) rejects(err);
        resolve(data.toString());
      });
    })
}

module.exports = {
  readFile
};