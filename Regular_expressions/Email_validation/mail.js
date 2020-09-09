console.log("Regular expressions")
console.log("Email-ID validation")

/*        \d - match any digit..[0-9]
          \w  - match any word character (a-z,A-Z,0-9 &_)
 */
function validate(){
    // regular expression are treated as object in javascript 
    var email = document.getElementById("em1").value;

    // var regx = /\w[@][a-z][.]^[com|co][.]^[in]/;
     var regx= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,10}).([a-z]{2,10})$/
    

    //test = Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
    if(regx.test(email))
    {
        console.log('Email Valid');
        alert("valid");
        document.getElementById('em22').innerHTML="Valid ";
        document.getElementById('em22').style.visibility="visible";
        document.getElementById('em22').style.color="green";
    }
    else{
        console.log('Email Invalid');
        alert("invalid");
        document.getElementById('em22').style.visibility = "visible";
        document.getElementById('em22').innerHTML="Invalid ";
        document.getElementById('em22').style.color="red";

    }
}