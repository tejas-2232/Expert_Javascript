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
Display.prototype.add = function (book) {
    console.log("Adding Book to Library");

    tableBody - document.getElementById('tableBody')

    let bookstring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>                        
                        </tr>`;
    tableBody.innerHTML += bookstring;

}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = " "
    }, 2000);

}

// Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have successfully submitted library form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;

    // adding book sections
    let Fantasy = document.getElementById('Fantasy');
    let Biography = document.getElementById('Biography');
    let ComputerScience = document.getElementById('ComputerScience');

    let type;
    // check if any book section is clicked or not
    if (Fantasy.checked) {
        type = Fantasy.value;
    }
    else if (Biography.checked) {
        type = Biography.value;
    }
    else if (ComputerScience.checked) {
        type = ComputerScience.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("SUCCESS", "your book has been successfully added");
    }
    else (
        // show erroe to user
        display.show('danger', 'sorry you cannot add this book')
    )

    e.preventDefault();




}


// remaining:save data to local storage
