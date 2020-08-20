console.log('welcome to Library');

// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {

}

//add methods to display prototype
Display.prototype.add=function(book){
    console.log("Adding Book to Library");
}


Display.prototype.clear=function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('You have successfully submitted library form');
    let name=document.getElementById('bookname').value;
    let author=document.getElementById('author').value;
    
    // adding book sections
    let Fantasy= document.getElementById('Fantasy');
    let Biography=document.getElementById('Biography');
    let ComputerScience=document.getElementById('ComputerScience');

    let type;
    // check if any book section is clicked or not
    if(Fantasy.checked){
        type=Fantasy.value;
    }
    else if (Biography.checked){
        type=Biography.value;
    }
    else if (ComputerScience.checked) {
        type=ComputerScience.value;
    }

    let book = new Book(name, author,type);
    console.log(book);

    let display=new Display();
    display.add(book);
    // display.clear();

    e.preventDefault();




}
 

    