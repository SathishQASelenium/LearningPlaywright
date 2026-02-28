// Test Data Generator
/**
 * As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

Examples:
Input:
Generate 8 users
Output:
USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
💡 Explanation:Each user gets a padded ID, sequential name/email, cycling role, and every 3rd user is INACTIVE for edge case testing.
 */

const roleOptions = ["admin", "editor", "viewer", "tester", "manager"];
var counter = 8;

for (i = 1; i <= counter; i++) {
    let paddedNumber = i.toString().padStart(4, '0');
    let roleIndex = (i - 1) % roleOptions.length;
    let role = roleOptions[roleIndex];
    let isActive = (i % 3 !== 0) ? "ACTIVE" : "INACTIVE";
    console.log(`USR-${paddedNumber} | TestUser_${i} | testuser${i}@testingacademy.com | ${role} | ${isActive}`);
}