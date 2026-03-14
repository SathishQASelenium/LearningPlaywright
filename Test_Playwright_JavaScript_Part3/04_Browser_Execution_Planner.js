/**
 * Browser Execution Planner
You have an array of all supported browsers and another array of temporarily blocked browsers. Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

Examples:
Input:
allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]
Output:
{ runnable: ["chromium", "webkit"], blocked: ["firefox"], plan: "Run on: chromium, webkit | Skip: firefox" }
💡 Explanation:The function filters out blocked browsers and formats both lists into a readable plan.
 */

let allBrowsers = ["chromium", "firefox", "webkit", "edge", "safari"]; // Array of all supported browsers
let blockedBrowsers = ["firefox", "edge"]; // Array of temporarily blocked browsers
let runnableBrowsers = allBrowsers.filter(browser => !blockedBrowsers.includes(browser)); // Filter out blocked browsers to get the runnable browsers
let plan = `Run on: ${runnableBrowsers.join(", ")} | Skip: ${blockedBrowsers.join(", ")}`; // Create the execution plan string by joining the runnable and blocked browsers
console.log({ runnable: runnableBrowsers, blocked: blockedBrowsers, plan: plan }); // Print the runnable browsers, blocked browsers, and the execution plan in JSON format