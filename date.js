let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp.toString());
console.log(Math.floor(Date.now()/100000));

let newDate = new Date()
console.log(newDate.getUTCMinutes());