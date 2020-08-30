// Do exercise for fruit and vegetables from harry bhai
console.log("AJAX tutorial in one GO")

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){

    console.log("you have clicked the fetchBtn");
    
    //Instantiate the xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET','filedata.txt',true);

    // use this  for post request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');

    // POST Request is used to send large amount of data
    // never use GET request to send the password, it's not safe

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
    params = `{"name":"test_asd", "salary":"4500","age":"40"}`;

    xhr.send(params);
    console.log("we are done");



}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);
 
function popHandler(){
    console.log("you have clicked the pop handler");
    
    //Instantiate the xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
    
    //what to do when response is ready

    xhr.onload=function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);

            console.log(obj);

            let list = document.getElementById('list');
            str= ""
            for(key in obj)
            {
                str += `<li>${obj[key].name}</li> `;

            }
            list.innerHTML=str;
        }
        else{
            console.error('Some error has occured');
        }  
    }


    // send the request
    xhr.send();
    console.log("we are done fetching user data");


}



