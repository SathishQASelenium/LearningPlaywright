// Login Brute-Force Detection

/**
 * Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).

Examples:
Input:
Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
Output:
Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected
💡 Explanation:After 3 consecutive failures, the account is locked. Even correct credentials on attempt 4 are rejected.
 */

var counter = 0;
const validEmail = "admin@testingacademy.com";
const validPassword = "Test@1234";
const maxAttempts = 3;
const attempts = ["wrong", "wrong", "wrong", "correct"];

let i = 0;
let isLocked = false;
do {
    if (isLocked) {
        console.log(`Attempt ${i + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
        i++;
        continue;
    }
    let email = attempts[i] === "correct" ? validEmail : "wrong";
    let password = attempts[i] === "correct" ? validPassword : "wrong"; 
    if (email === validEmail && password === validPassword) {
        console.log(`Attempt ${i + 1}: ✅ SUCCESS - Logged in`);
        counter = 0; // reset counter on successful login
    } else {
        counter++;
        console.log(`Attempt ${i + 1}: ❌ FAILED - Strike ${counter}/${maxAttempts}`);  
        if (counter >= maxAttempts) {
            console.log("🚨 ACCOUNT LOCKED");
            isLocked = true;
        }
    }
    i++;
} while (i < attempts.length);