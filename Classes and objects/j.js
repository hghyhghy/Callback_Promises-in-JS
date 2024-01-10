//  creating object in js 

const  student = {
    name:"Subham Sarkar",
    marks:95.5,
    //  declaring mathod in object 
    printmarks: function () {
     console.log( "Marks is ",this.marks);
    }
};

console.log( student.printmarks());
const employee = {
    caltax : function () {
        console.log( "The tax is 10%");
    }
}

//  prototype in js 
const karanArjun = {
    salary:50000,
    caltax : function () {
        console.log( "The tax rate is 20%");
    }
}

karanArjun .__proto__= employee;
console.log( karanArjun.caltax());