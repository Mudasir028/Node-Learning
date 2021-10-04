
// find
// filter
// map
// splice
// push
// pop
// shift
// unshift
// some
// forEach
// every



const reward= [
  {
    "position": 5,
    "name": "diamonds",
    "quantity": 20000
  },
  {
    "position": 3,
    "name": "diamonds",
    "quantity": 10000
  },
  {
    "position": 7,
    "name": "diamonds",
    "quantity": 10000
  }
]
console.log("reward before");
console.log(reward);

// for(let i=0; i< reward.length; i++){
//  if(reward[i].position === 3){
//    console.log(reward[i])
//  }
// }
// let i = 0;
// let searched ={}
// while(i < reward.length ){
//   if(reward[i].position === 5){
//     searched= reward[i]
//   }
//   i++;
// }
// console.log(searched);

// let filtered =[];
// let i = 0;
// while(i < reward.length ){
//   if(reward[i].position !== 1){
//     filtered.push(reward[i])
//   }
//   i++;
// }
// console.log(filtered);



// let mapped =[];
// let i = 0;
// while(i < reward.length ){
//   if(reward[i].position !== 3){
//     mapped.push(reward[i])
//   }
//   i++;
// }
// console.log(mapped);

let i = 0;
while(i < reward.length ){
  if(reward[i].position !== 3){
    reward.pop(reward[i])
  }
  i++;
}
console.log("reward after change");
console.log(reward);
