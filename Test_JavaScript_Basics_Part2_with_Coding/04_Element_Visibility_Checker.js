// Element Visibility Checker

/**
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

Examples:
Input:
isPresent = true, isDisplayed = true, isEnabled = false
Output:
Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.
💡 Explanation:Element is present and displayed but not enabled. Severity is WARNING because it's not fully interactable.
*/

let isPresent = true;
let isDisplayed = true;
let isEnabled = false;
let state = "";
let severity = "";
let message = "";
if (isPresent && isDisplayed && isEnabled) {
    state = "READY";
    message = "Element is present, visible, and enabled. Ready for interaction.";
}
else if (isPresent && isDisplayed && !isEnabled) {
    state = "DISABLED";
    message = "Element is visible but disabled. Wait for enable state or check preconditions.";
}
else if (isPresent && !isDisplayed) {
    state = "HIDDEN";
    message = "Element is present but hidden. Check visibility conditions.";
}
else if (!isPresent) {
    state = "NOT PRESENT";
    message = "Element is not present in the DOM. Check if it is rendered correctly.";
}

severity = (!isPresent) ? "CRITICAL" : (!isDisplayed || !isEnabled) ? "WARNING" : "OK";

console.log(`Status: ${state} Severity: ${severity} Action: ${message}`);