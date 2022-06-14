let stocks = { 
    Fruits : ["Stawberry", "Grapes", "Banana", "Apples"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"]
};

let is_shop_open = true;

// let order = () => {
//     return new Promise( (resolve, reject) => {
//         if(true) {
//             resolve();
//         }
//         else {
//             reject();
//         }
//     });
// }

// order() 
// .then() // resolve()
// .then()
// .then()
// .catch() // reject()
// .finally() // resolve() reject()


async function order() {
    try{
        await abc;
    }

    catch(error){
        console.log("abc doesn't exist", error);
    }

    finally{
        console.log("Runs code anyways!");
    }
}

order().then( () => console.log("This is then handler!"));