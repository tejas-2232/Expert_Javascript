console.log("This is tutorial about- creating, Removing and replacing elements in Javascript ");

let element = document.createElement("li")

// add class name to li element

element.className='childul'; // by this line you will get <li> element of class chilul very simple
element.id=" createdLi";     // same like class,ID is also added in <li> element
element.setAttribute('title',"research paper") 
console.log(element); // you will get empty <li> element