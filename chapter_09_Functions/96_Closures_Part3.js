function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }

        return `Attempt ${attempts}/${max} for ${testName}`;
    };

    return tryAgain;
}

let retry = makeRetryTracker(3); // retry is now the tryAgain function returned by makeRetryTracker() and has access to attempts variable of makeRetryTracker() function. This is because of closure in JavaScript.
console.log(retry("Login")); // Output: Attempt 1/3 for Login
console.log(retry("Login")); // Output: Attempt 2/3 for Login
console.log(retry("Login")); // Output: Attempt 3/3 for Login
console.log(retry("Login")); // Output: Login exceeded max retries (3) because attempts is now 4 which is greater than max (3) and this is possible because of closure in JavaScript.