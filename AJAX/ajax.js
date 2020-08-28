console.log("AJAX tutorial in one GO")

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){

    console.log("you have clicked the fetchBtn");
    
    //Instantiate the xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','filedata.txt',true);

    //what to do on progress(optional)
    xhr.onprogress=function(){
        if(this.status === 200){
            console.log('On progress');
        }
        else{
            console.error('Some error has occured');
        }  
    }
    //what to do when response is ready
    xhr.onload = function(){
        console.log(this.responseText)
    }

    // send the request
    xhr.send();
    console.log("we are done");



}



