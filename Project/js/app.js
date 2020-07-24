console.log('welcome to Magic notes')
// add event listner to add note button
let addBtn=document.getElementById('addBtn');   
addBtn.addEventListener("click",function(e){

    let addTxt = document.getElementById('addTxt'); 
    let notes = localStorage.getItem("notes");  // to check if any note already exists in localstorage or not
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); // if any string is found then pass it//notesobj can be an array
    }
    notes.push(addTxt.value);  // adding text written in note to notes variable
    localStorage.setItem("notes",JSON.stringify(notes));   // converting notes array to string, cause in localstorage we can set it only in string 
    addTxt.value = "";                                    // settign value again to null
})