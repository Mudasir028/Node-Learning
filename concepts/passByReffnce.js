var objREf = {num: 5.5};

function passByReff(obj){
  // return obj.num++;      //if num is 5, then num++ returns 5, ofter that sets num to 6.
  // return obj.num+1;
  // return obj.num = obj.num+1;    // coorect
  return obj.num = obj.num++;   //ak expretion ma value ak j=hi update krni chahia.
  // return obj.num = ++obj.num;    // If num is 5, then ++x sets num to 6 and returns 6,

  // value ko update krnay k lia hamay isay = krna prta ha
}
// ()
// {}
// []
// 8+4+[4*{6-2+(5-3)}]
// 8+4+[4*{6-2+2}]
// 8+4+[4*6]
// 8+4+24
console.log(objREf.num);
const a = passByReff(objREf);

console.log(a);
console.log(objREf.num);
