//Rest Parameters
function logResults(suiteName, ...results) { // ...results is a rest parameter that collects all additional arguments into an array
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(", ")}`);
}

logResults("Auth Suite", "pass", "fail", "pass", "skip");
// Suite: Auth Suite
// Results: pass, fail, pass, skip


function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // NaN, because c is undefined and adding undefined to a number results in NaN
console.log(add(1, 2, 3, 4)); // 6, the extra argument (4) is ignored