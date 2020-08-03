console.log("welcome to Date object tutorial")

let today = new Date();
// console.log(today); // its data type is reference

let odate= new Date('June 13 1976');

odate= new Date('16/04/1888');  // dd/mm/yyyy - invalid
odate = new Date('04/16/1990')
// console.log(odate);

let a;
a= odate.getDay();  // (04/16/1990) is monday. Here calender starts from sunday. And monday is one next to sunday. so sunday=0 and monday=1 and tuesday=2
console.log("getDay",a);

let b;
b=odate.getDate();
console.log('getDate',b);

let c;
c=odate.getMinutes();
console.log('getMinutes',c);

let d;
d=odate.getSeconds();
console.log('getSeconds',d);

let e;
e=odate.getHours();
console.log('getHours',e);


f=odate.getTime();
console.log('numbser of seconds since 1JAN1970',f);

/* methods to try 
odate.getMilliseconds()
odate.getMonth()
odate.setDate()
odate.setMonth()
odate.setFullYear()
odate.setMinutes()
odate.setHours()
odate.setSeconds()

*/