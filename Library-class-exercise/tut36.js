console.log("library class exercise")

// create a class library and implement the following:
// constructor must take the booklist as an argument
// getBookList()
// issueBook(bookname,user)
// returnBook(bookname)

class Library {
    constructor(booklist){
        this.booklist=booklist;
        this.issuedBooks = {};
    }

    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);            
        });
    }

    issueBook(bookname,user){
        if(this.issuedBooks[bookname] == undefined){
           this.issuedBooks[bookname] = user;
        }
        else{
            console.log("the book is already issued");
        }
    }

    returnBook(bookname){ 
        delete this.issuedBooks[bookname];

    }
}