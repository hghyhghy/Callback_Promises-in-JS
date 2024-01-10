
//  settimeOut function in js 

//  creating a function 

let hello = function () {
    console.log( "Hello Js");
}

setTimeout(hello,2000)

//  the another way 
setTimeout ( () => {
    console.log("Hello Js");
},2000)

//  callbacks in js 

function sum ( a,b ) {
    console.log( " a+b =", a+b);
}

function calculateSum ( a , b , sumCallback) {
    sumCallback ( a,b )
}

calculateSum ( 2,2,sum)

function getDataBase ( id ,getnextdata ) {
    return new Promise ( (resolve,reject) =>{
        setTimeout ( () =>{
            console.log( "DataId is " ,id);
            resolve("success")

            if (getnextdata) {
                getnextdata()
            }
        }, 5000);
    });

}

// callback Hell 
getDataBase(345 , () =>{
console.log( "Getting data 2 ...");

    getDataBase(346 , () => { 
console.log( "Getting data 3 ...");
getDataBase (347, () => {
console.log( "Getting data 4 ...");

    getDataBase(348)
})})
})

//  using promise 
getDataBase(1) .then ( (res) => {
    console.log(res);
    getDataBase(2).then( (res) => {
        console.log(res);
    })
})