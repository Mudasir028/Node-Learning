const leagueArr = require('./arrayM');

// filter league where all reward > 1000 

console.log(leagueArr.length)

const filteredLeague = leagueArr.filter(league => {

//   The every() method returns true if all elements in an array pass a test (provided as a function).
// The method executes the function once for each element present in the array:

// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// If no false occur, every() returns true
// every() does not execute the function for empty array elements.

// every() does not change the original array
  const res = league.reward.every((reward) => reward.quantity > 1000)
  return res
})

console.log(filteredLeague);