const { readFile } = require('./lib/convertCallbackToPromice');

// Two ways to call promice base function
// 1)
// (async () => {
//     console.log('start');
//     const data =await readFile('./readme');
    
//     console.log( data);
//     console.log('end');
// });

// 2)
console.log('start');

readFile('./readme')
.then((response)=>{
    console.log(response)
});

console.log('end');