let myDate=new Date()

// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMinutes());
// console.log(myDate.getMonth());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getUTCDate());
// console.log(myDate.getUTCDay());
// console.log(myDate.getUTCFullYear());
// console.log(myDate.getUTCHours());
// console.log(myDate.getUTCMilliseconds());
// console.log(myDate.getUTCMinutes());
// console.log(myDate.getUTCMonth());
// console.log(myDate.getUTCSeconds());
// console.log(myDate.toDateString());
// console.log(myDate.setDate("23"));
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let date=Date.now()

// console.log(date);


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let month = months[d.getMonth()];
let day=days[d.getDay()]
let year=d.getFullYear()

console.log(`day is ${day} & month is ${month} year  is ${year}`);





