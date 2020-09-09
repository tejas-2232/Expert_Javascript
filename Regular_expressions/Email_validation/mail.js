console.log("Regular expressions")
console.log("Email-ID validation")

function validate(){
    // regular expression are treated as object in javascript 
    var email = document.getElementById("em1").value;
    var regx = /$/;
    

    //test = Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
    if(regx.test(email))
    {
        console.log('Email Valid');
        document.getElementById('').innerHTML="Valid ";
        document.getElementById('').style.visibility="visible";
        document.getElementById('').style.color="green";
    }
    else{
        console.log('Email Invalid');
        alert("invalid");
        document.getElementById('text22').innerHTML="Invalid ";
        document.getElementById('text22').style.visibility = "visible";
        document.getElementById('text22').style.color="red";

    }
}