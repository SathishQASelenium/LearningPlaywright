//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found

results.indexOf("fail");    //1
results.indexOf("skip");    // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");  // 4

// includes — returns boolean
results.includes("error"); // true
results.includes("skip");  // false

// find — returns first matching element
let nums = [10, 25, 30, 45];
nums.find(x => x > 20);  // 25,30,45 -> A -25
console.log(nums.find(x => x > 20));

// findIndex - returns index of first matching element, otherwise -1
nums.findIndex(n => n > 20);
console.log(nums.findIndex(n => n > 20));

// findLast and findLastIndex - returns the last matching element and its index, otherwise undefined and -1
nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);    // 3
console.log(nums.findLast(n => n > 20));
console.log(nums.findLastIndex(n => n > 20));