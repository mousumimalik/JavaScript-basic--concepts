let stocks = { 
    Fruits : ["Stawberry", "Grapes", "Banana", "Apples"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"]
};

let is_shop_open = true;

let topping_choice = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(
                console.log("Which topping will you love? ")
            );
        }, 3000)
    });
};


async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await topping_choice()

    console.log(" D ");
    console.log(" E ");
}

kitchen()

console.log("Doing the dishes! ");
console.log("Cleaning the tables! ");
console.log("Taking others order! ");
