// When Step 2 depends on Step 1's result, you MUST run them sequentially.

// Step 1 - Step 2

function apiCall(name) {
    return new Promise(function (resolve) {

        setTimeout(function () {
            resolve(name, " 200 Ok!");
        }, 1000)

    });
}

async function sequenttialTest() {
    console.log("Starting of the Test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");

}

sequenttialTest();

// Note: This is the common way of Playwright test execution as most of the time we will have to wait for one step to complete before moving to the next step.