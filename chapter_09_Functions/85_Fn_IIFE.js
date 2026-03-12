//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1() {
    console.log("Hi")
}

name1(); // We have to call the function to execute it.

// IIFE - Immediately Invoked Function Expression
(function () {
    console.log("Hi")
})(); // We don't have to call the function to execute it. It is executed immediately after its definition.


// We can use IIFE to set up our environment before running our tests. It is a good practice to use IIFE to set up our environment before running our tests.
(function () {
    console.log("Staging")
})(); 

// We can use IIFE to set up our environment before running our tests. 
// It is a good practice to use IIFE to set up our environment before running our tests. 
// We can also use IIFE to create a new scope for our variables. This way, we can avoid polluting the global scope with our variables.
(() => {
    console.log("Setup complete");
})();