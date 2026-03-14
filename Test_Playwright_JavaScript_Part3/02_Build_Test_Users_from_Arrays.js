/**
 * Build Test Users from Arrays
Write a JavaScript function that receives two arrays: one with names and one with roles. Return a new array of user objects in the format `{ username, email, role }`. The username should be lowercase with spaces replaced by underscores, and the email should use the domain `@playwrightbatch.com`.

Examples:
Input:
names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]
Output:
[{ username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }, { username: "neha_singh", email: "neha_singh@playwrightbatch.com", role: "viewer" }]
💡 Explanation:Each name is normalized into a username and reused to build the email.
 */

let names = ["Amit Kumar", "Neha Singh", "Sathish Kumar"];
let roles = ["admin", "viewer", "editor"];
let users = names.map((name, index) => {
    let username = name.toLowerCase().replace(/ /g, "_");
    let email = `${username}@playwrightbatch.com`;
    let role = roles[index];
    return { username, email, role };
});
console.log(users);