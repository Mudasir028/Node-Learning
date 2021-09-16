const leagueArr = require('./arrayM');

// map and filter dono callback method latay Han. or khush acpect krtay han han ka return kray callback. filter ka case filtermethod true or false 
// ecpect krta ha callback function sa or map() ka case ma map callback function kuch acpect krta ha. jo b callback usay return kray ga map usay ak new array ma push kr da ga.  
// require true or flase
const leag = leagueArr.filter(leagueObj => leagueObj.order > 4);
// const leag1 = leag.map(leagObj => leagObj.name);
const leag1 = leag.map(leagObj => {
    return { "name": leagObj.name }
}
);


console.log(leag1)


// [
//     { name: 'Diamond' },
//     { name: 'Legend' }
// ]