console.log('welcome to Magic notes')
// add event listner to add note button
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");   
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt = "";
    console.log(notesObj);
})