// Type 2 Functions

// So with argument/parameter but no return type. 

function greetByName(name) { // parameter
    console.log("Hi", name);
}

greetByName("Pramod"); // argument
greetByName("Dipak");
greetByName("Meeti");
greetByName("Sangeetha");

function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething); // This will print undefined because there is no return statement in the function.

let name1 = greetByName("Sumit");
console.log(name1); // This will also print undefined because there is no return statement in the function.