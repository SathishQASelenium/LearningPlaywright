// Write a function makeRateLimiter(limit) that returns a function. 
// Each call to the returned function should track usage and return true if under limit
// , false when limit is exceeded.

function makeRateLimiter(limit) {

    let call = 0;

    function check() {
        call++;
        return call <= limit;
    }

    return check;
}

let limiter = makeRateLimiter(3); // limiter is now the check function returned by makeRateLimiter() and has access to call variable of makeRateLimiter() function. This is because of closure in JavaScript.
console.log(limiter()); // Output: true because call is now 1 which is less than or equal to limit (3) and this is possible because of closure in JavaScript.
console.log(limiter()); // Output: true because call is now 2 which is less than or equal to limit (3) and this is possible because of closure in JavaScript.
console.log(limiter()); // Output: true because call is now 3 which is less than or equal to limit (3) and this is possible because of closure in JavaScript.
console.log(limiter()); // Output: false because call is now 4 which is greater than limit (3) and this is possible because of closure in JavaScript.