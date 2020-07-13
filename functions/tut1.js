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