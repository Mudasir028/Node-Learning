const leagueArr = require('./arrayM');

// filter league where one reward > 1000 
// ['',{},[{},{}]]

console.log(leagueArr.length)

const filteredLeague = leagueArr.filter(league => {
  const res = league.reward.find((reward) => reward.quantity > 1000)
  return res !== undefined
  // or
  // return res !== undefined ? true : false
})

// const filteredLeague = leagueArr.filter(league => league.reward.find(reward => reward.quantity > 1000))
console.log(filteredLeague)


// const data = undefined;
// console.log('data');
// console.log(data);

// if (data !== undefined) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log('actual result')
// console.log(data !== undefined)


// const filteredLeague = leagueArr.filter(league => league.reward.find(reward => reward.quantity > 1000))

// league => league.reward.find(reward => (reward.quantity > 1000) ? true: false)

// reward => (reward.quantity > 1000) ? true: false