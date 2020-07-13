console.log("This is function tut");

//function definition
function greet(name,thank){
    console.log(`happy bday ${name}..! 
    God bless you:) ${thank} `)


}

greet(name,'Thanks a lot');  //function call with two param

var name ="tejas";

console.log('USING VARIABLE AS A FUNCTION');

var name2='john'

const mygreet= function(name2,thank2){
    
    var msg = `wish u happy new year ${name2}.
    ${thank2}`;
    return msg;

}
var val = mygreet(name2,'welcome YEAR 2020')
console.log(val); 


console.log("----------------------------------------------------------------------------------")
console.log("creating object and accesing its elements");

const myobj={
    namee: "lio",
    Genre: function(){
        return "pop";
    } 
}

console.log(myobj.Genre());
console.log("---------------------------------------------");
console.log("Learning about scope of functions");

var i=255;           //global scope

function ui(name3){
    var i=7;
    console.log("local scope",i);  // this i has only function level scope.
    return `this is ${name3}. Happy coding`;
}
console.log(ui("tom"),i);

//TIP: use more {let} and {const}, as it keeps your code more clean
// and also they have global level scope and easy to read. 
