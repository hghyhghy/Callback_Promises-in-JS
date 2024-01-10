//  promises in js 

let promise = new Promise( ( resolve , reject ) => {
    console.log( "This is a promise ");
    resolve("Successful 101")
    // reject("404  Page not found")
})
console.log( promise );

 
function getDataBase ( id ,getnextdata ) {
  return  new Promise ( (resolve,reject) => {
    setTimeout ( () =>{
        console.log( "DataId is " ,id);
        resolve("Successfully serached")
        if (getnextdata) {
            getnextdata()
        }
    }, 5000)
  })
}

let result = getDataBase(123)
console.log(result);
console.log(result);

const getPromise = () =>{
    return new Promise( (resolve,reject) => {
        console.log( "This is a promise");
        resolve("Success")
    });
};

let p = getPromise();
p.then( (res) => {
    console.log( "Promise came here",res);
});

function asynchronous () {
    return new Promise( (resolve,reject) => {

        setTimeout ( () => {
            console.log( "System Password = 199@34#");
            resolve("Success")
        }, 3000);
    });
};

function asynchronous1 () {
    return new Promise( (resolve,reject) => {

        setTimeout ( () => {
            console.log( "System Password2 = 199@34#");
            resolve("Success")
        }, 3000);
    });
};

console.log("Fetchiing System Password.....");
console.log();
let p1 = asynchronous();

p1.then ( (res) => {
    console.log("Fetchiing System Password2.....");    
    let p2 = asynchronous1();
    
    p2.then ( (res) => {
    })
});   

