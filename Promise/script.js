let stocks = { 
    Fruits : ["Stawberry", "Grapes", "Banana", "Apples"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise( (resolve, reject) => {
        if(is_shop_open) {
            setTimeout( () => {
                resolve(work() );
            }, time);   
        }
        else {
            reject(console.log("Our shop is closed!"));
        }
    });
}


order(2000, () => console.log(`${stocks.Fruits[0]} is selected!`))


.then( () => {
    return order(0000, () => console.log("Production has started!"));
})


.then(() => {
    return order(2000, () => console.log("Fruite is chopped!"));
})


.then( () => {
    return order(1000, () => {
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} is selected!`)
    });
})


.then( () => {
  return order(1000, () => console.log("Started the machine!"));  
})


.then( () => {
    return order(2000, () => {
        console.log(`Icecream placed on ${stocks.Holder[0]}`);
    });
})


.then( () => {
    return order(3000, () => {
        console.log(`${stocks.Toppings[0]} is selected!`)
    });
})


.then( () => {
    return order(1000, () => console.log("Icecream is served!"));
})


.catch( () => {
    console.log("Customer left!");
})


.finally( () => {
    console.log("Day ended, shop is closed!");
})