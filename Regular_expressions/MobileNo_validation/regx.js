console.log("Regular expresseion part 2")
console.log("Mobile number validation")

function validate(){
    // regular expression are treated as object in javascript
    
    var username = document.getElementById("").value;
    var regx = //;
    

    //test = Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
    if(regx.test())
    {
        console.log('Number valid');
        document.getElementById().style
    }
    else{
        console.log('Invalid Number');
        alert("invalid");
        document.getElementById('user').style.visibility="visible";

    }
}