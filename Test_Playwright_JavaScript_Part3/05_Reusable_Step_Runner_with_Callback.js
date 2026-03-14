/**
 * Reusable Step Runner with Callback
Write a higher-order function `runStep(stepName, actionFn)` that logs the start of a step, executes the callback, and returns an object in the format `{ stepName, passed, message }`. If the callback throws an error, catch it and return `passed: false` with the error message.

Examples:
Input:
runStep("open dashboard", () => "Page loaded")
Output:
{ stepName: "open dashboard", passed: true, message: "Page loaded" }
💡 Explanation:The callback succeeds, so the wrapper marks the step as passed.
 */

function runStep(stepName, actionFn) {
    console.log(`Executing step: ${stepName}`);
    try {
        const message = actionFn();
        return { stepName, passed: true, message };
    } catch (error) {
        return { stepName, passed: false, message: error.message };
    }
}

// Example usage:
const step1 = runStep("open dashboard", () => "Page loaded");
console.log(step1);
const step2 = runStep("fetch user data", () => { throw new Error("Network error") });
console.log(step2);