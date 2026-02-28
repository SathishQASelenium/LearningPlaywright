// Test Environment Config

/**
 * In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

Examples:
Input:
envName = "staging"
Output:
Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror
💡 Explanation:The switch matches "staging" and sets the corresponding configuration values for the staging environment.
 */

const envName = "staging";
let baseURL, apiKeyPattern, timeout, description;

switch (envName) {
    case "dev":
        baseURL = "https://dev-api.testingacademy.com";
        apiKeyPattern = "dev_key_xxxx-xxxx";
        timeout = 5000;
        description = "Development - For active development and testing";
        break;
    case "staging":
        baseURL = "https://staging-api.testingacademy.com";
        apiKeyPattern = "stg_key_xxxx-xxxx";
        timeout = 8000;
        description = "Staging - Pre-production mirror";
        break;
    case "qa":
        baseURL = "https://qa-api.testingacademy.com";
        apiKeyPattern = "qa_key_xxxx-xxxx";
        timeout = 7000;
        description = "QA - For quality assurance testing";
        break;
    case "production":
    case "prod":
        baseURL = "https://api.testingacademy.com";
        apiKeyPattern = "prod_key_xxxx-xxxx";
        timeout = 10000;
        description = "Production - Live environment";
        break;
    default:
        console.log("UNKNOWN - Unhandled environment");
}
if (baseURL && apiKeyPattern && timeout && description) {
    console.log(`Environment: ${envName.toUpperCase()} Base URL: ${baseURL} API Key: ${apiKeyPattern} Timeout: ${timeout}ms Description: ${description}`);
}
