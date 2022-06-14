
// stocks{} object 
let stocks = {
    // Fruits[] array 
    Fruits : ["Stawberry", "Grapes", "Banana", "Apples"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"]
};

// accessing banana
// console.log(stocks.Fruits[2]);

let order = ( Fruit_name, call_production ) => {
    setTimeout( () => {
        console.log(`${ stocks.Fruits[Fruit_name] } is selected`);

        call_production();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("Production has started!");

        setTimeout(() => {
            console.log("The fruit has been chopped!");

            setTimeout(() => {
                console.log(`${ stocks.Liquid[0] } and ${ stocks.Liquid[1] } is added!`);

                setTimeout(() => {
                    console.log("Machine has been started!");

                    setTimeout(() => {
                        console.log(`Icecream is placed on ${ stocks.Holder[0] }!`);

                        setTimeout(() => {
                            console.log(`${ stocks.Toppings[0] } is added as toppings!`);

                            setTimeout(() => {
                                console.log("Served Ice Cream! Enjoy!");
                            }, 2000);
                        }, 3000)
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 000);
};

order(0, production);