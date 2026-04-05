import { BASE_URL, formatUpperCaseString } from "../testUtil.js";

console.log("Base URL is: " + BASE_URL);

let result = formatUpperCaseString("hello world");
console.log("Formatted String is: " + result);

//console.log(fname); // This will throw an error because fname is not exported from testUtil.js