console.log('this is tutorial 27')

//object literal for creating objects
let car = {
    name: 'honda civic',
    topSpeed: 300,
    run: function run() {
        console.log('car is running');

    }
}
// console.log(car)
// we already have seen constructors like these:
//new Date()=

// creating  constructors for car

function GeneralCar(cname, speed) {
    this.name = cname;
    this.topSpeed = speed;
    this.run = function () {
        console.log(` ${this.name} is running`)

    }
    this.analyze = function () {
        console.log(`this car is running slower by ${200 - this.topSpeed} than Mercedez`)

    }
}
car1 = new GeneralCar('fiat', 170);
car2 = new GeneralCar('FORD', 50);
console.log(car1);
console.log(car2);
