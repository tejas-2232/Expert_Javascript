console.log("This is tutorial about- creating, Removing and replacing elements in Javascript ");

let element = document.createElement("li")
// add class name to li element

let text= document.createTextNode(" i am a text node");
element.appendChild(text);



element.className = 'childul'; // by this line you will get <li> element of class chilul very simple
element.id = " createdLi";     // same like class,ID is also added in <li> element
element.setAttribute('title', "research paper")
//console.log(element); // you will get empty <li> element


// now we will append element created in UL. before that add inner text in 'element' 
element.innerText = "Hello people,You all are beautiful";

let ul = document.querySelector('ul.this');
ul.appendChild(element); // adding element to <UL>

console.log(ul);   // querySelector gives the first element if UL
console.log(element);
console.log("=========================================================");

console.log("creating second element in DOM")

let element2 = document.createElement('li')
element2.className = 'getul'
element2.id = "sub1"
element2.innerHTML = '<b>blockchain</b>'

// select li to add elemet in it using quey selector

let dd = document.querySelector('ul.subjects')
dd.appendChild(element2);
// console.log(dd);
// console.log(element2);


//--------------------------------------------



// Replacing element
console.log('Replacing element');

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';

let tnode=document.createTextNode("this is created node for elem2");
elem2.appendChild(tnode);

element.replaceWith(elem2); //replacing element

// removing element 
let sc=document.getElementById('stt')
console.log(sc);
sc.removeChild(document.getElementById('ct'));  // removes cloud tech name


//using getAttribute

console.log('using getAttribute');

let pr=elem2.getAttribute('id')
console.log(elem2,pr);

let dr=elem2.hasAttribute('class')
console.log(dr);
console.log('returns true,= it tells that elem2 has class attribute');

//elem2.removeAttribute('id') // removes id from that element

// we ecan set the atribute for elem2

elem2.setAttribute('title','this is elem2_Title');
console.log(elem2);