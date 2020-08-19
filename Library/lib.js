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


// Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('You have successfully submitted library form');
    let name=document.getElementById('bookname').value;
    let author=document.getElementById('author').value;
    

    let Fantasy= document.getElementById('Fantasy');
    let Biography=document.getElementById('Biography');
    let ComputerScience=document.getElementById('ComputerScience');

    let type;

    if(Fantasy.checked){
        type=Fantasy.value;
    }
    else if (Biography.checked){
        type=Biography.value;
    }
    else if (ComputerScience.checked) {
        type=ComputerScience.value;
    }

    let sd = new Book(name, author,type);
    console.log(sd);
    e.preventDefault();




}
 

    