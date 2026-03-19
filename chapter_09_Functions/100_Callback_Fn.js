// Callback Function
// A callback function is a function that is passed as an argument to another function, to be called later.

function runTest(testName, callback) {
    let result = "pass";
    // 100 lines of test code...
    callback(testName, result);
}

function onComplete(name, result) {
    console.log(`Test: ${name} finished with ${result}`);
}

runTest("Login Test", onComplete);

// when everything is done, call onComplete with the test name and result. This allows us to separate the test logic from the reporting logic, making our code more modular and reusable.

// It will be similar like higher-order functions, where we can call at anytime. Here only at last when the test is done, we will call the callback function.