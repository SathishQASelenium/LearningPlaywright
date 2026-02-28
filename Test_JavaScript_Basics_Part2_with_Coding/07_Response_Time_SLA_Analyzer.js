// Response Time SLA Analyzer

/**
 * As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.

Examples:
Input:
responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
Output:
Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED
💡 Explanation:The while loop iterates through response times, tracking min/max and counting breaches over 500ms.
 */

let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let totalRequests = responseTimes.length;
let minResponse = responseTimes[0];
let maxResponse = responseTimes[0];
let slaBreaches = 0;

while (responseTimes.length > 0) {
    let currentResponse = responseTimes.shift(); // Get the first response time

    // Update min and max response times
    if (currentResponse < minResponse) {
        minResponse = currentResponse;
    }
    if (currentResponse > maxResponse) {
        maxResponse = currentResponse;
    }
    // Check for SLA breach
    if (currentResponse > SLA_LIMIT) {
        slaBreaches++;
    }
}

let breachPercentage = (slaBreaches / totalRequests) * 100;
let overallStatus = slaBreaches > 0 ? "❌ SLA VIOLATED" : "✅ SLA MET";

console.log(`Total Requests: ${totalRequests}`);
console.log(`Min Response: ${minResponse}ms`);
console.log(`Max Response: ${maxResponse}ms`);
console.log(`SLA Breaches: ${slaBreaches} (${breachPercentage.toFixed(2)}%)`);
console.log(`Overall Status: ${overallStatus}`);
