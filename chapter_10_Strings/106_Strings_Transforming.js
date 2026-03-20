// Transforming Strings

let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespace
console.log(str.trim());

str.trimStart(); // "Hello, World!  " - only leading spaces
str.trimEnd(); // "  Hello, World!" - only trailing spaces

// Replace
let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS"); // "Test: PASS. Retry: FAIL."  (first only)
msg.replaceAll("FAIL", "PASS"); // "Test: PASS. Retry: PASS." (all occurrences)
msg.replace(/FAIL/g, "PASS"); // replace all with Regex

// Concatenation

"Hello" + " " + "World"; // "Hello World"
"Hello".concat(" ", "World"); // "Hello World"
`${"Hello"} ${"World"}`; // "Hello World" - template literal (also allows expressions)

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa")); // "https://qa.vwo.con?qa=pramod" - regex with global flag

// Splitting & Joining
"pass,fail,skip".split(",");  // ["pass", "fail", "skip"]
"hello".split("");  // ["h","e","l","l","o"]

"test_login_pass".split("_").join(" "); // "test login pass"


// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date); // "2024-03-07"