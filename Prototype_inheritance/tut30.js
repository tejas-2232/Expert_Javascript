console.log("welcome to Javascript tutorial ")

//create a simple prototype
const proto={

    slogan: function(){
        return `It's Never too late `;
    },
    changeName:function(newName){
        this.name= newName;

    }

}


//This creates tj object

 
const tj = Object.create(proto)
tj.name= 'Tommy'
tj.role = "designer"

tj.changeName('Rohn')  // name will update
// console.log(tj); 
 

//This also creates tj object
const tj1 = Object.create(proto, {
    name:{value:'tommy',writable:true},
    role:{value:'designer'}

})
tj1.changeName("tommmy2")
// console.log(tj1)

// employee contstructor

function Employee(name,salary,experience){
    this.name= name;
    this.salary= salary;
    this.experience= experience;

}

// slogan
Employee.prototype.slogan = function(){
    return `It's Never too late. Regards ${this.name}`;
}

// create object from this constructor 
let tjobj = new Employee("Snoden",500000,33);
// console.log(tjobj.slogan())

// programmer contructor

function programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language=language;
}
// Inherit prototype
programmer.prototype= Object.create(Employee.prototype);

// manually setting the prototype
programmer.prototype.constructor = programmer;

let danny = new programmer('rohan',20000,4,'python');
console.log(danny)