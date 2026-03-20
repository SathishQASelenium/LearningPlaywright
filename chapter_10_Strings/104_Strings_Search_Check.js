// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes() - checks if substring exists, returns boolean
url.includes("staging");       // true
url.includes("production");    // false

// startsWith / endsWith - checks start/end, returns boolean
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true

// indexOf / lastIndexOf - returns index of first/last occurrence, -1 if not found
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex. 
console.log(url.search(/login/)); // regex

url.search(/\d+/); // regex
// https://regex101.com/