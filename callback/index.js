const { readFile } = require('./lib/convertCallbackToPromice');

// readFile('./readme')

function funTakeCallback( callback ){
callback();

}




funTakeCallback('./readme', ()=>{
    console.log('gfgfgf')
});