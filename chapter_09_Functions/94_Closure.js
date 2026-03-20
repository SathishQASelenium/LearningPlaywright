function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
    return inner;

}

let fn_inner = outer(); // Outer called! and fn_inner is now inner() function returned by outer() and has access to message variable of outer() function. This is called closure in JavaScript.
fn_inner(); // Now inner() is called and it has access to message variable of outer() function even after outer() has finished executing. This is the power of closure in JavaScript.

// Directly calling inner() not allowed!
// outer().inner(); // As we have in Java this is not possible in JavaScript. We have to first call outer() to get the inner() function and then call it. This is because inner() is not a method of outer() but a function defined inside outer().