
// let str = "  PASS  ";
// console.log(str.trim().toLowerCase());
// ```
// - a) `" pass "` 
// - b) `"PASS"` 
// - c**) **`**"pass"**`** **
// - d) `" pass "` 
// // The `trim()` method removes whitespace from both ends of a string, and the `toLowerCase()` method converts all characters in the string to lowercase. Therefore, the output will be `"pass"`.

//What does `"pass,fail,skip".split(",").length` return?

// - a) 1
// - b) 2
// - c) **3**
// - d) 4
// The `split(",")` method splits the string into an array of substrings based on the comma delimiter. In this case, it will split the string into three parts: "pass", "fail", and "skip". Therefore, the length of the resulting array will be 3.

// What is the output?

// ```javascript
// let str = "hello";
// str[0] = "H";
// console.log(str);
// ```
// - a) `"Hello"` 
// - **b) **`**"hello"**`** **
// - c) `"H"` 
// - d) Error
// The output will be `"hello"`. In JavaScript, strings are immutable, which means that you cannot change individual characters of a string. When you attempt to assign a new value to `str[0]`, it does not modify the original string. Therefore, the original string remains unchanged, and the output will be `"hello"`.


// let url = "https://staging.example.com";

// - a) `url.split(".")[0]` 
// - b) `url.slice(8, 15)` 
// - c) `url.split("://")[1].split(".")[0]` 
// - d) **Both b and c**

// Both `url.slice(8, 15)` and `url.split("://")[1].split(".")[0]` will return `"staging"`.

// What does this return?

// "Error: 404 Not Found".match(/\d+/g);
// ```
// - a) `"404"` 
// - **b) **`**["404"]**`** **
// - c) `[404]` 
// - d) `null` 
// The `match()` method with the regular expression `/\d+/g` searches for all occurrences of one or more digits in the string. In this case, it will find "404" and return it as an array. Therefore, the output will be `["404"]`.

// TASK 19032026

let url = "https://staging.myapp.com/dashboard";

url.includes("staging"); // true
url.startsWith("https"); // true
url.endsWith("/dashboard"); // true

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status = log.match(/Status: (\d+)/)[1]; // Output: "500"

let env = "staging"; let module = "auth"; let count = 7; let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId); // Output: "staging_auth_007"

let actual = " PASS "; let expected = "pass"; actual.trim().toLowerCase() === expected; // true

let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) ); // Output: { query: "login", page: "2", sort: "asc" }

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***"); // replaces the token part with "***REDACTED***" while keeping "Bearer " intact
// Output: "Bearer ***REDACTED***"