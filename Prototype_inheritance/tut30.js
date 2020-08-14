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