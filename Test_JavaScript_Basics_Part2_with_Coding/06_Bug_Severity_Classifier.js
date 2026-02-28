// Bug Severity Classifier

/**
 * As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

Examples:
Input:
frequency = "always", impact = "blocker"
Output:
Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately
💡 Explanation:A bug that always occurs and is a blocker gets the highest severity P0, requiring immediate action.
 */

let frequency = "always";
let impact = "blocker";
let severityMatrix = "";
let message = "";

if (frequency === "always" && impact === "blocker") {
    severityMatrix = "P0";
    message = "Critical: Stop release immediately";
}
else if (frequency === "always" && impact === "major") {
    severityMatrix = "P1";
    message = "High: Requires immediate attention";
}
else if (frequency === "always" && impact === "minor") {
    severityMatrix = "P2";
    message = "Medium: Should be fixed before next release";
}
else if (frequency === "often" && impact === "blocker") {
    severityMatrix = "P1";
    message = "High: Requires attention";
}
else if (frequency === "often" && impact === "major") {
    severityMatrix = "P2";
    message = "Medium: Should be fixed before next release";
}
else if (frequency === "often" && impact === "minor") {
    severityMatrix = "P3";
    message = "Low: Can be fixed in next release";
}
else if (frequency === "rarely" && impact === "blocker") {
    severityMatrix = "P2";
    message = "Medium: Should be fixed before next release";
}
else if (frequency === "rarely" && impact === "major") {
    severityMatrix = "P3";
    message = "Low: Can be fixed in next release";
}
else if (frequency === "rarely" && impact === "minor") {
    severityMatrix = "P4";
    message = "Trivial: Fix if time permits";
}
else {
    severityMatrix = "UNKNOWN";
    message = "Invalid frequency or impact input";
}

console.log(`Bug Title: Checkout page crashes on applying coupon`);
console.log(`Frequency: ${frequency}`);
console.log(`Impact: ${impact}`);
console.log(`Severity: ${severityMatrix} - ${message}`);