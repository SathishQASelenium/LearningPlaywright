// We can call async function with .then() method, which will receive the resolved value of the promise returned by the async function
// async function sayHello() {
//     return "Hello, QA!";
// }

// sayHello().then(function (msg) { 
//     console.log(msg);
// });

// We can also use await keyword to wait for the promise to resolve and get the value directly without using .then() method
// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status code:", status);
// }

// getStatus();

// We can use async/await to write asynchronous code in a more synchronous way, making it easier to read and understand
// async function testFlow() {
//     let step1 = await Promise.resolve("Opened browser");
//     console.log(step1);

//     let step2 = await Promise.resolve("Clicked login");
//     console.log(step2);

//     let step3 = await Promise.resolve("Verified dashboard");
//     console.log(step3);
// }

// testFlow();

// We can handle errors in async functions using try/catch blocks, which will catch any rejected promises or thrown errors within the async function
// async function riskyTest() {
//     try {
//         let data = await Promise.reject("Element not found");
//         console.log(data);
//     } catch (err) {
//         console.log("Test failed:", err);
//     }
// }

// riskyTest();

// We can also use finally block to execute code that should run regardless of whether the promise was resolved or rejected, such as cleanup tasks or logging
// async function apiTest() {
//     try {
//         let response = await Promise.resolve({ status: 201, body: "Created" });
//         console.log("Status:", response.status);
//         console.log("Body:", response.body);
//     } catch (err) {
//         console.log("Error:", err);
//     } finally {
//         console.log("Test complete");
//     }
// }

// apiTest();

// The order of execution in async functions can be different from regular synchronous code, as the async function will run in the background while the rest of the code continues to execute. This can lead to unexpected results if not handled properly, so it's important to understand how async/await works and how it affects the flow of your code.
// console.log("A");

// async function test() {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
// }

// test();
// console.log("D");

// We can use Promise.all() to run multiple async operations in parallel and wait for all of them to complete before proceeding. This is useful when we have multiple independent tasks that can be executed simultaneously, such as making multiple API calls or performing multiple database queries.
// async function runAll() {
//     let [a, b, c] = await Promise.all([
//         Promise.resolve("Login: OK"),
//         Promise.resolve("Cart: OK"),
//         Promise.resolve("Checkout: OK")
//     ]);

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// runAll();

// We can also use Promise.allSettled() to run multiple async operations in parallel and get the results of all of them, regardless of whether they were fulfilled or rejected. This is useful when we want to handle each result individually and not fail the entire operation if one of them fails.
// async function healthCheck() {
//     let results = await Promise.allSettled([
//         Promise.resolve("Auth: UP"),
//         Promise.reject("DB: DOWN"),
//         Promise.resolve("Cache: UP")
//     ]);

//     results.forEach(function (r) {
//         let status = r.status === "fulfilled" ? "✅" : "❌";
//         let msg = r.value || r.reason;
//         console.log(status + " " + msg);
//     });
// }

// healthCheck();

// We can also use async/await in loops, but we need to be careful with the order of execution and how it affects the flow of our code. If we want to run async operations sequentially, we can use a for loop with await inside it. However, if we want to run them in parallel, we should use Promise.all() or Promise.allSettled() instead of a loop with await.
// async function checkEndpoints() {
//     let endpoints = ["/login", "/users", "/orders"];

//     for (let i = 0; i < endpoints.length; i++) {
//         let result = await Promise.resolve(endpoints[i] + " → 200");
//         console.log(result);
//     }

//     console.log("All checks done");
// }

// checkEndpoints();

// Async IIFE(Immediately Invoked)
// We can also use async IIFE (Immediately Invoked Function Expression) to run an async function immediately without having to call it separately. This is useful when we want to execute some asynchronous code at the top level of our script or module without having to define a named function and call it later.
// (async function () {
//     let msg = await Promise.resolve("Quick async test");
//     console.log(msg);
// })();

// console.log("Outside");

// We can also use async/await to perform calculations or operations that involve asynchronous tasks, such as fetching data from an API or reading from a file. This allows us to write code that looks more like traditional synchronous code while still taking advantage of the benefits of asynchronous programming.
async function add(a, b) {
    return a + b;
}

async function main() {
    let result = await add(10, 20);
    console.log("Sum:", result);

    let result2 = await add(result, 30);
    console.log("Total:", result2);
}

main();