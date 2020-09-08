console.log("Regular expresseion part 2")
console.log("Mobile number validation")

function validate(){
    // regular expression are treated as object in javascript
    
    var text = document.getElementById("text1").value;
    var regx = /^[7-9][0-9]{9}$/;
    

    //test = Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
    if(regx.test(text))
    {
        console.log('Number valid');
        document.getElementById('text22').innerHTML="Valid Number";
        document.getElementById('text22').style.visibility="visible";
        document.getElementById('text22').style.color="green";
    }
    else{
        console.log('Invalid Number');
        alert("invalid");
        document.getElementById('text22').innerHTML="Invalid ";
        document.getElementById('text22').style.visibility = "visible";
        document.getElementById('text22').style.color="red";

    }
}