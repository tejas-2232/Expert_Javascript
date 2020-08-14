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

const tj = Object.create(proto)

tj.name= 'Tommy'
tj.role = "designer"

tj.changeName('Rohn')  // name will update
console.log(tj);