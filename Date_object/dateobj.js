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


g=odate.getMilliseconds();
console.log('getMilliseconds',g);


h=odate.getMonth();
console.log('getMonth',h);

I=odate.getDate();
console.log('getDate',I);

j=odate.setMonth(5); //june
console.log('setMOnth',j);


k=odate.setFullYear();
console.log('setFullYear',k);


l=odate.setMinutes();
console.log('',l);


m=odate.getMilliseconds();
console.log('',m);


n=odate.setMinutes();
console.log('setMinutes',n);


o=odate.setHours();
console.log('setHours',o);

p=odate.setSeconds();
console.log('setSeconds',p)

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