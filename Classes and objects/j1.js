
class Toyota {
  
    // initializes by constructor 
    constructor(brand,mileage) {
        console.log( "Creating new object ");
        this.brand=brand
        this.mileage=mileage

    }

    start = function () {
        console.log( "Start");
    }

    stop =  function () {
        console.log( "Stop" );
    }

}

//  creating object 

let fortuner = new Toyota("Toyota Fortuner X15",100);
console.log( fortuner );

class Parents {
    
    hello = function () {
        console.log( "Hello Guys");
        
    }
}

class Child extends Parents {}

let c = new Child()
console.log(c.hello());

class Person {
    constructor (name) {
        this.species= "Homo sepiens"
        this.name = name
    }
    sleep = function () {
        console.log( "They can sleep");
    }
}

class Engineer extends Person {
    constructor(branch,name) {
        super(name);
        this.branch=branch 
    }
    work = function () {
        console.log( "They can work , Build something");
    }
}

let e = new Engineer("Electrical Engineering","Subham Sarkar")
console.log( e);