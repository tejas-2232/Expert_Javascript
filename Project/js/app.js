console.log('welcome to Magic notes')
showNotes();
// add event listner to add note button
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addTitle.value,
        text: addTxt.value
    }

    notesObj.push(myobj);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = ""; 
    // console.log(notesObj);
    showNotes();
})


//function to Display Notes

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index+1} ${element.title}</h5>
                        <p class="card-text">${element.text}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</a>
                    </div>
            </div>
        
                `;

    });

    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html; 
    }
    else {
        notesElm.innerHTML= ` Nothing To Display. Please Use "Add a note" option above to add notes ` ;
    }
}

// function to delete Note

function deleteNote(index){
    // console.log("I am deleting",index);

    let notes= localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj= JSON.parse(notes);
    }

    notesObj.splice(index,1);

    localStorage.setItem("notes",JSON.stringify(notesObj)); // updating local storage to remove that note
    showNotes();

}

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    
    let inputVal = search.value.toLowerCase();
    // console.log("Input Event fired ",inputVal);
    let noteCards= document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;        
        if(cardTxt.includes(inputVal)){
            // if cardTxt includes search val text we want to search then block it
            element.style.display= "block";
        }
        else{
            //if cardTxt doesnt include the search val text then set it to none
            element.style.display = "none";
        }

        // console.log(cardTxt); // to see which card has the searched text
    })
})