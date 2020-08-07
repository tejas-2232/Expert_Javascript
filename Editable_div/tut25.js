console.log('This is tutorial on editable div')

/* you have to create div & inject it into the page which contains heading.whenever someone
clicks on the div,i should be converted into the editable item. whenever user clicks away (blur). 
save the into local storage
*/

let divElem = document.createElement('div');

// add text to that created element

let val = localStorage.getItem('text');

let text;

if(val == null){
  text = document.createTextNode('This is my element. CLick to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// give id,style,class

divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width:154 pz; margin:34px; padding:23px;');

//grab the main container

let container = document.querySelector('.container');

let first = document.getElementById('myfirst');


// insert elem before id first

container.insertBefore(divElem, first);

console.log(divElem, container, first)

// add event listenr to divElem

divElem.addEventListener('click',function(){
    let notextareas = document.getElementsByClassName('textarea').length;
    if(notextareas == 0){

    let html= elem.innerHTML;
    divElem.innerHTML = ` <textarea class=" textarea form-control" class='textarea' id="textarea" rows="3">${html} </textarea>` 
    }
    // listen for blur event on textarea
    
    let textarea = document.getElementById('textarea');

    textarea.addEventListener('blur',function(){

        elem.innerHTML=  textarea.value;
        localStorage.setItem('text',textarea.value);
    })    



})

 /// use it for changes