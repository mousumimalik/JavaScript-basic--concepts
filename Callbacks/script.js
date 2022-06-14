function fun1( callback_fun2 ) {
    callback_fun2();
    console.log("This is fun1.");
}

function fun2() {
    console.log("This is fun2.");
}

fun1(fun2);

let order = ( call_production ) => {
    console.log("Order placed, please call production!");
    call_production();
};

let production = () => {
    console.log("Order recieved, starting production!");
};

order(production);