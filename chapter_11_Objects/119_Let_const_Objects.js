let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" };
console.log(config1);

// print
console.log("---- ")

const config2 = { browser: "Chrome", timeout: 3000 };
//  Modifying properties — NOT ALLOWED
config2.browser = "Firefox";
config2.timeout = 5000;
config2.retries = 2;
console.log(config2);

// config2 = { browser: "Safari" };
console.log(config2);