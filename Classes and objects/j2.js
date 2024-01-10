
let DATA = "Confidential Information"

class User {

    constructor ( name , email) {
        this.name = name
        this.email = email
    }

    viewdata =  function () {
        console.log( "The data is ", DATA);
    }
}

class Admin extends User {
    constructor (name,email) {
        super(name,email)
    }
    editdata = () => {
        DATA = "Edit new data"
    }
}

let student = new User ( "Subham sarkar", "subhamsarkar666@gmail.com")
let student1 = new User ( "Shreyoshi Majumdar", "sshreyoshi606@gmail.com")

console.log( student,student . viewdata());
console.log(student1, student1 . viewdata());

let ad1 = new Admin ( "Subhashis Bose", "adminsubhashis@gmail.com")

console.log( ad1 );
console.log(DATA);

