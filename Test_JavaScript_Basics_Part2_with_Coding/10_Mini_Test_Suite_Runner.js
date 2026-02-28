// Mini Test Suite Runner

/**
 * Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.

Examples:
Input:
{ name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
Output:
✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED
💡 Explanation:Each test is evaluated based on its comparison type using switch, with results tracked via counters and reported at the end.
 */

const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Status code is 404", actual: 404, expected: 404, type: "strictEqual" },
    { name: "Response time is less than 500ms", actual: 450, expected: 500, type: "lessThan" },
    { name: "User is authenticated", actual: true, expected: true, type: "truthy" },
    { name: "Response type is string", actual: "OK", expected: "string", type: "typeCheck" },
    { name: "Status code is not 500", actual: 200, expected: 500, type: "looseEqual" },
];
let passCount = 0;
let failCount = 0;
let errorCount = 0;
let consecutivePasses = 0;
let firstFailureIndex = -1;
for (let i = 0; i < testCases.length; i++) {
    const { name, actual, expected, type } = testCases[i];
    let result = "";
    switch (type) {
        case "strictEqual":
            if (actual === expected) {
                result = `✅ TC-${i + 1}: ${name} → PASS (${actual} === ${expected})`;
                passCount++;
            } else {
                result = `❌ TC-${i + 1}: ${name} → FAIL (${actual} !== ${expected})`;
                failCount++;
                if (firstFailureIndex === -1) firstFailureIndex = i;
            } break;
        case "looseEqual":
            if (actual == expected) {
                result = `✅ TC-${i + 1}: ${name} → PASS (${actual} == ${expected})`;
                passCount++;
            } else {
                result = `❌ TC-${i + 1}: ${name} → FAIL (${actual} != ${expected})`;
                failCount++;
                if (firstFailureIndex === -1) firstFailureIndex = i;
            } break;
        case "lessThan":
            if (actual < expected) {
                result = `✅ TC-${i + 1}: ${name} → PASS (${actual} < ${expected})`;
                passCount++;
            } else {
                result = `❌ TC-${i + 1}: ${name} → FAIL (${actual} >= ${expected})`;
                failCount++;
                if (firstFailureIndex === -1) firstFailureIndex = i;
            } break;
        case "truthy":
            if (actual) {
                result = `✅ TC-${i + 1}: ${name} → PASS (truthy)`;
                passCount++;
            }
            else {
                result = `❌ TC-${i + 1}: ${name} → FAIL (falsy)`;
                failCount++;
                if (firstFailureIndex === -1) firstFailureIndex = i;
            } break;
        case "typeCheck":
            if (typeof actual === expected) {
                result = `✅ TC-${i + 1}: ${name} → PASS (type is ${expected})`;
                passCount++;
            }
            else {
                result = `❌ TC-${i + 1}: ${name} → FAIL (type is ${typeof actual}, expected ${expected})`;
                failCount++;
                if (firstFailureIndex === -1) firstFailureIndex = i;
            } break;
        default:
            result = `❌ TC-${i + 1}: ${name} → ERROR (Unknown test type)`;
            errorCount++;
    }
    console.log(result);
    if (result.includes("PASS") && firstFailureIndex === -1) {
        consecutivePasses++;
    }
} 
const totalTests = testCases.length;
const passRate = ((passCount / totalTests) * 100).toFixed(2);
console.log(`\nTest Summary: Total: ${totalTests}, Passed: ${passCount}, Failed: ${failCount}, Errors: ${errorCount}, Pass Rate: ${passRate}%`);
if (firstFailureIndex !== -1) {
    console.log(`First failure at TC-${firstFailureIndex + 1}: ${testCases[firstFailureIndex].name}`);
}