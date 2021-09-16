
const fs = require('fs');
const axios = require('axios');

// const listUsers = async () => {
//   console.log("0") 

//   try {
//       const res = await axios.get('https://reqres.in/api/users');
//       const res1 = await axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
//       console.log(res.data.data);
//       console.log(res1);
//   } catch (err) {
//       console.error(err);
//   }
// };

console.log("0") 
const listUsers = async () => {

  try {
      const [res, res1] = await Promise.all([
        axios.get('https://reqres.in/api/users'),
        axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
    ]);

      console.log(res.data.data);
      console.log(res1);
  } catch (err) {
      console.error(err);
  }
};


fs.readFile('./readme', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });


listUsers();

  
  console.log("1") 
 
 
 
 console.log("2")
 setTimeout(()=>{
 console.log("inside SetTimeout1")
 }, 0)
//  setImmediate agr callback ka under ho ag to ya hmasha settimeout sa phlay ha call ho ho ga
 setImmediate(() => {
  console.log('-----------------------immediate----------------------');
});
 console.log("3")
 