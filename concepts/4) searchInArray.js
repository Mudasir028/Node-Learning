const league = require('./arrayM');

// example 1)
function updateLeague(league){
  const filteredLeagueReward = league[0].reward.find(reward => reward.position === 7)
  const leagueCopy = {...filteredLeagueReward}
  leagueCopy.quantity = 100000;
 return { filteredLeagueReward, leagueCopy };
}
const a =updateLeague(league)

// console.log(a)

// spread ... operator sirf root level ki copy bnata ha. e.g. ak object ki 4 properties han 3 ki type premitive type ha or ak 
//  or ak rafrance type ha. refrance type root level pa nai ha. to spread operator is ki copy nai bnnay ga. 
// or jb hum is tra refrance type
// ma koi change kray ga to is reffrance pa pri value change ho jati ha Example 2)


// Example 2)

const leagues = [
  {
    "_id": "610c15c4d9bf11131db07c7c",
    "name": "Bronze",
    "order": 1,
    "reward": [
      {
        "position": 1,
        "name": "diamonds",
        "quantity": 20000
      },
      {
        "position": 2,
        "name": "diamonds",
        "quantity": 10000
      },
      {
        "position": 3,
        "name": "diamonds",
        "quantity": 10000
      }
    ]
  }
];



// const leagueCopy = leagues[0];
const leagueCopy = {...leagues[0]};

const filteredLeagueReward = leagueCopy.reward.find(reward => reward.position === 2);
filteredLeagueReward.quantity = 100000;

console.log(leagues[0]);
console.log(leagueCopy);
