// Test Case Result Counter

/**
 * After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

Examples:
Input:
testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
Output:
Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.
💡 Explanation:The for loop iterates through results, counting each type. With 2 failures (≤2), the verdict is to review before release.
 */

let test_Results = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let passCount = 0;
let passPercentage = 0;
let failCount = 0;
let skipCount = 0;
for (let i = 0; i < test_Results.length; i++) {
    if (test_Results[i] === "pass") {
        passCount++;
    } else if (test_Results[i] === "fail") {
        failCount++;
    } else if (test_Results[i] === "skip") {
        skipCount++;
    }
}
passPercentage = (passCount / test_Results.length * 100);
let verdict = "";
if (failCount === 0 && passPercentage === 100) {
    verdict = "Ready for Release";
} else if (failCount <= 2) {
    verdict = "Minor failures. Review before release.";
} else if (failCount > 2){
    verdict = "Major failures. Block release until issues are resolved.";
}
console.log(`Total Tests : ${test_Results.length} Passed: ${passCount} Failed: ${failCount} Skipped: ${skipCount} Pass Rate: ${passPercentage.toFixed(2)}% VERDICT: ${verdict}`);