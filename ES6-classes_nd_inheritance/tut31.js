console.log('Wwelcome to tut31')

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience = givenExperience;
        this.division=givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this is best company`
    }

    joiningYear(){
        return 2019 - this.experience //2020-14
    }

    static add(a,b){
        return a+b;
    }
}

rohn = new Employee('rohn',14,'division');
// console.log(rohn);

class programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,Language,github){

        super(givenName,givenExperience,givenDivision);

        this.Language=Language;
        this.github-github;
    
    }

    favoriteLanguage(){
        if(this.Language=='python'){
            return `python`;
        }
        else{
            return `javascript`;
        }
    }

    static multiply(a,b){
        return a*b;
    }

}


rohan = new programmer("rohan",5,'first',"dart","rohan785");
console.log(rohan);
console.log(rohan.favoriteLanguage());

console.log(programmer.multiply(5,8));



