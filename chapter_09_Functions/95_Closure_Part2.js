function makeCounter(start = 0) {

    let count = start;  // this variable is "closed over"
    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }
    }

}

let counter = makeCounter(0); // counter is an object with three methods: increment, decrement, and get. These methods have access to the count variable even after makeCounter has finished executing. This is because of closure in JavaScript.
counter.increment(); // count is now 1
counter.increment(); // count is now 2
counter.increment(); // count is now 3
console.log(counter.get()); // Output: 3
counter.decrement(); // count is now 2
console.log(counter.get()); // Output: 2