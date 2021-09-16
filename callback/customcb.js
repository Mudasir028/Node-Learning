

function numberCallback(num, cb){
    for(let i = 1; i<= num; i++){
        console.log(i)
    
    }
    cb();


}
///////////////////////
console.log('1')
numberCallback(100, ()=>{
    console.log('2')
});
console.log('3')