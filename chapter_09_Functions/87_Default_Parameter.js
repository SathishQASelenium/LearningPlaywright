// Default parameters allow you to specify default values for function parameters. 
// If the caller does not provide a value for that parameter, the default value will be used.

function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("Login"); // Output: Retrying Login up to 3 times, 1000ms apart
retry("Checkout", 5); // Output: Retrying Checkout up to 5 times, 1000ms apart
retry("API Test", 2, 500); // Output: Retrying API Test up to 2 times, 500ms apart