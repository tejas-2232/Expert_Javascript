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
}

rohn = new Employee('rohn',14,'division');
console.log(rohn);





