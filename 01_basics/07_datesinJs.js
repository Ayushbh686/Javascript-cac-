// Dates

let myDate = new Date()

// let mydate= new Date()
// console.log(mydate);  //2024-04-15T05:55:45.859Z
// console.log(mydate.toString()); //Mon Apr 15 2024 11:25:45 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()); //Mon Apr 15 2024
// console.log(mydate.toISOString);  //[Function: toISOString]
// console.log(mydate.toJSON());  //2024-04-15T05:55:45.859Z
// console.log(mydate.toLocaleDateString());  //15/4/2024
// console.log(mydate.toLocaleString());  //15/4/2024, 11:25:45 am

// let myCreatedDate = new Date(2023, 0, 23)   // months start from zero monday 23 jan 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

