// class is a type of function. but we use class keyword for initilizing a class instead of fuction
// properties of class defines inside the constractor () method.
// constructor () method is called each time the class object is initilized.
// A JavaScript class is not an object.
// It is a template for JavaScript objects.

const leagues = require('../concepts/arrayM')

class League {
  constructor(league) {
     this._id = league._id;
     this.name = league.name;
     this.order = league.order;
     this.reward = league.reward;
  }
  // filter(){
  //   let i=0;
  //   let filteredLeagueReward = [];
  //   while(i < this.reward.length){
  //     if(this.reward[i].position !==5){
  //       filteredLeagueReward.push(this.reward[i])
  //     }
  //     i++;
  //   }
  // return filteredLeagueReward;
  // }

  filterReward(callback){
    let filterReward = [];
    for(let i = 0; i < this.reward.length; i++){
      let singleReward = this.reward[i];
      if(callback(singleReward)){
        filterReward.push(singleReward);
      }
    }
    return filterReward;
  }

  findReward(callback){
    for(let i = 0; i < this.reward.length; i++){
      let singleReward = this.reward[i];
      if(callback(singleReward)) return singleReward;
    }
  }

  mapReward(callback){
    let mapReward = [];
    for(let i = 0; i < this.reward.length; i++){
      let singleReward = this.reward[i];
      mapReward.push(callback(singleReward))
    }
    return mapReward
  }

  everyReward(callback){
    for(let i = 0; i < this.reward.length; i++){
      let singleReward = this.reward[i];
      if(callback(singleReward)){
        return true;
        // return mtlab khtam
      }
      else {
        return false;
      }
    }
  }

  someReward(callback){
    for(let i = 0; i < this.reward.length; i++){
      let singleReward = this.reward[i];
      if(callback(singleReward)){
        return true;
      }
    }
    return false;
  }
}

myLeag = new League(leagues[0]);
// console.log(myLeag); 
// console.log(myLeag.filter());
console.log("-------------------Custom Filter method-------------------")
console.log(myLeag.filterReward((reward)=> reward.position !== 6));
console.log("-------------------Built in Find method-------------------")
console.log(myLeag.reward.filter((reward)=> reward.position !== 6));
console.log("-------------------Custom Find method-------------------")
console.log(myLeag.findReward((reward)=> reward.position >= 6));
console.log("-------------------Built in Find method-------------------")
console.log(myLeag.reward.find((reward)=> reward.position >= 6));
console.log("-------------------Custom Map method-------------------")
console.log(myLeag.mapReward((reward)=> reward.position+1));
console.log("-------------------Built in Map method-------------------")
console.log(myLeag.reward.map((reward)=> reward.position+1));
console.log("-------------------Custom Every method-------------------")
console.log(myLeag.everyReward((reward)=> reward.position > 0));
console.log("-------------------Built in Every method-------------------")
console.log(myLeag.reward.every((reward)=> reward.position > 0));
console.log("-------------------Custom Some method-------------------")
console.log(myLeag.someReward((reward)=> reward.position >= 10));
console.log("-------------------Built in Some method-------------------")
console.log(myLeag.reward.some((reward)=> reward.position >= 10));
console.log("-------------------Custom Splice method-------------------")
console.log(myLeag.someReward((reward)=> reward.position >= 10));
console.log("-------------------Built in Splice method-------------------")
console.log(myLeag.reward.some((reward)=> reward.position >= 10));