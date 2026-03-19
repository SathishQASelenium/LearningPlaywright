//1. What is the output?

console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}

//a) ReferenceError b) undefined c) "Hello, Alice!" d) TypeError
// Answer - c) "Hello, Alice!" - Function declarations are hoisted, so the function is available before its definition in the code.

//2. What is the output?

console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";

//a) "ok" b) "error" c) undefined d) ReferenceError
// Answer - d) ReferenceError - Function expressions (including arrow functions) are not hoisted, so getStatus is not defined at the time of the console.log call.

//3. What does this function return?

function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();

//a) undefined b) 0 c) null d) TypeError
// Answer - b) 0 - The function is called with an empty array, so the filter returns an empty array, and the length of an empty array is 0.

//4. What is the output?

function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

//a) 1 b) 2 c) 3 d) 0
// Answer - c) 3 - Each call to counter() increments the count and returns the new value. After three calls, the count is 3.

//5. Which is a pure function? 
// a) function log(msg) { console.log(msg); } b) function add(a, b) { return a + b; } c) function getTime() { return Date.now(); } d) function push(arr, val) { arr.push(val); return arr; }
// Answer - b) function add(a, b) { return a + b; } - A pure function always produces the same output for the same input and has no side effects. The add function meets these criteria, while the others do not.

//6. What is the output?

function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);

//a) 1 b) undefined c) 4 d) TypeError
// Answer - c) 4 - The function test uses the rest parameter syntax (...args) to collect all arguments into an array. The length of this array is 4, since there are four arguments passed to the function.

//7. What is the output?

const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());

//a) "staging" b) undefined c) null d) TypeError
// Answer - b) undefined - Arrow functions do not have their own this context; they inherit it from the surrounding scope. In this case, this.env refers to the global object, which does not have an env property, resulting in undefined.

//8. What does this return?

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);

//a) [2, 4, 6] b) [3, 5, 7] c) [2, 3, 4] d) [4, 6, 8]
// Answer - b) [3, 5, 7] - The first map call doubles each number (2, 4, 6), and the second map call adds 1 to each (3, 5, 7).

//9. What is the output?

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));

//a) TypeError b) "Running: Login" c) undefined d) "name => Running: name"
// Answer - b) "Running: Login" - The run function takes a function as an argument and calls it with the string "Login". The arrow function passed to run returns the string "Running: Login".

//10. 10. What is the output?

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());

//a) 20 b) 30 c) 40 d) 10
// Answer - b) 30 - The outer function initializes x to 10, and the inner function initializes its own x to 20. The inner function returns 20, and the outer function returns 10 + 20 = 30.