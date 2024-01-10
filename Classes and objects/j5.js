
//  async await in js 

function api() {
    return new Promise ( (resolve,reject) => {
        setTimeout ( () => {
            console.log( "Weather Data");
        } , 2000)
    });
};

//  caaling via await 
 async function callApi () {
    await api();
    await api();
}
callApi()


 
function getDataBase ( id ) {
    return  new Promise ( (resolve,reject) => {
      setTimeout ( () =>{
          console.log( "DataId is " ,id);
          resolve("Successfully serched")
      }, 2000)
    })
  }
  
//  using async await 

async  function getAll () {
    console.log("Getting data 1...");
    await getDataBase(1);
    console.log("Getting data 2...");
    await getDataBase(2);
    console.log("Getting data 3...");
    await getDataBase(3);
}

getAll()

//  IIFE  immediately invoked function expression 

(
    async  function () {
        console.log("Getting data 1...");
        await getDataBase(1);
        console.log("Getting data 2...");
        await getDataBase(2);
        console.log("Getting data 3...");
        await getDataBase(3);
    }
)();