console.log("Manipulating  websites using JS")

let a = window; 
// window is global object in javascript
//document is part of window

console.log(a);

//alert("Sign up first")


// b=prompt("did you sign up at first stage");
// console.log(b);

// c= confirm("are you sure you want to delete it?");
// console.log(c);


d=window.innerHeight; //tells Height of window
console.log(d);

e=window.innerWidth; //tells width of window
console.log(e);
// as window is global you can just write e=innerWidth; =>It works Try it.


f=scrollX;
console.log(f); // tells the page x co-ordinate
h=scrollY;
console.log(h); //tells the page y co-ordinate

// use location

i=location
console.log(i);// outputs url of page

// if you want that url in string form then use

j=location.toString()
console.log(j);

//If you want to visit any website using console use this=>

// location.href='//facebook.com'

// if you use history.go(-1) 
// it will take you one page back 
