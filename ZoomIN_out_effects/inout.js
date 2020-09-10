console.log("zoom in zoom out animation");

var widthD = 100;
var difference = 2;
var intervalID = 0;

function increase() {
    // to remove the hang effect from image,clearInterval is used in increase function
    // gives smooth animation
    clearInterval(intervalID);

    intervalID = setInterval(zoomIn, 20); // zoomIn-method to be called and 20- time in milli-seconds    
}


function decrease() {
    // to remove the hang effect from image,clearInterval is used in increase function
    // gives smooth animation
    clearInterval(intervalID);

    intervalID = setInterval(zoomOut, 20); // zoomIn-method to be called and 20- time in milli-seconds    
}
const image = document.getElementById("img1");

function zoomIn() {
    if (widthD < 200) {
        widthD = widthD + difference;
        console.log(widthD);
        image.width = widthD;
    }
    else {
        clearInterval(intervalID);
    }
}


function zoomOut() {
    if (widthD > 100) {
        widthD = widthD - difference;
        document.getElementById('img1').width = widthD;
        console.log(widthD);
    }
    else {
        clearInterval(intervalID);
    }
}


