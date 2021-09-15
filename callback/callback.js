// before callaing funtion print a staement
// function
// return Promise
//     in promice print a statement(inside promice) ofter one sec
// ofter that promice return ok statement

const { mainModule } = require("process")


// outpoot:
// start
// inside promice
// ok
// end

// is ma ma promice crete krna sikha ma nay. async function await ka bgar use kr skatay han lakin await async ka bgar use nai kr sktay.
// function jo functionality perform krta ha usay ham return ka bagar nai use kr skatay
// promice jab ham create krtay hmay promice usi wakat mil jaata ha. jo  is bat ki yad dahani krwata ha ka.
// promice resole or rejection ka bad hmay response milay ga. await tb lgana ha jb hmar result chahia . k tb jb ham is create kjr rhay ho.

function handlePromice() {
    const prom =  new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('inside Promice')
            resolve("ok")
        }, 1000)
    })
    // console.log(prom)
    return prom
}

async function main(){
    console.log("Start")
    const p = await handlePromice();
    console.log(p)
    console.log("End")
}

main()