// When Step 2 depends on Step 1's result, you MUST run them sequentially.

// Step 1 - Step 2


function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + ": 200 OK");
        }, 1000);
    });
}

async function parallelTest() {
    console.log("Starting of the Test");
    let start = Date.now();

    let [r1, r2, r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Service"),
        apiCall("Payment Service")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");

}

parallelTest();
// Note: We wont use this parallel exection in Playwright as most of the time we will have to wait for one step to complete before moving to the next step. But this is a good use case when you have multiple independent API calls that can be made in parallel.