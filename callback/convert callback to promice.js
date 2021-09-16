const fs = require('fs');

function doSumthing() {
    // callback waly function ko hm promise base bna sktay han. is tra
    return new Promise((resolve, rejects) =>{
        fs.readFile('./readme', (err, data) => {
        if (err) rejects(err);
        resolve(data.toString());
      });
    })
}


(async () => {
    console.log('start');
    const data =await doSumthing();
    
    console.log( data);
    console.log('end');
})();