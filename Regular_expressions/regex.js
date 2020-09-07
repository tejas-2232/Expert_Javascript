console.log("Regular expresseion part 1")

function validate(){
    // regular expression are treated as object in javascript
    
    var username = document.getElementById("uname").value;
    var regx = /E00/;


    //test = Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
    if(regx.test(username))
    {
        console.log('username valid');
    }
    else{
        console.log('Invalid username');
        alert("invalid");
        document.getElementById('user').style.visibility="visible";

    }
}