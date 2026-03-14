/**
 * Playwright Result Summary Generator
You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, where status can be `"passed"`, `"failed"`, or `"skipped"`. Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration, and a comma-separated list of failed step names.

Examples:
Input:
results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
Output:
Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form
💡 Explanation:The function loops through the array, counts each status, adds durations, and collects failed step names.
 */

let results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },
    { name: "submit", status: "skipped", durationMs: 0 },
    { name: "verify submission", status: "skipped", durationMs: 300 },
    { name: "logout", status: "failed", durationMs: 200 }
];

let totalSteps = results.length;
let passedCount = 0;
let failedCount = 0;
let skippedCount = 0;
let totalDuration = 0;
let failedSteps = [];

results.forEach(result => {
    totalDuration += result.durationMs;
    if (result.status === "passed") {
        passedCount++;
    } else if (result.status === "failed") {
        failedCount++;
        failedSteps.push(result.name);
    } else if (result.status === "skipped") {
        skippedCount++;
    }
});

console.log(`Total Steps: ${totalSteps} Passed: ${passedCount} Failed: ${failedCount} Skipped: ${skippedCount} Total Duration: ${totalDuration}ms Failed Steps: ${failedSteps.join(", ")}`);