console.log("welcome to tutorial on callback functions")


// pretend that response to this is coming from server
const students = [
    {name:"sam",subject : "Javascipt"},
    {name:"Ron",subject : "Ruby"}

]

// create two functions

function enrollStudent(student,callback){
    setTimeout(function() {
        students.push(student);
        console.log('student has been enrolled'); 
        callback();      
    }, 3000);
}

// settime out is used because server will take time to response and react 
// that's why we set timeout of 3 seconds


function getStudents(){
    setTimeout(function() {
        let str = "";

        students.forEach(function(student){
            str += `<li> ${student.name} </li> `
        });
        document.getElementById('students').innerHTML = str;
        console.log('student data has been fetched');       

    }, 5000);
}


let newstudent = {name:"john", subject: "Machine algo"};

enrollStudent(newstudent,getStudents);
// getStudents();

// callback functiona may be synchronous or asynchronous
// e.g. forEach is synchronous 

