import { BASE_URL as bul_util, formatTestName } from "../utils.js"; // Aliasing the BASE_URL from utils.js as bul_util to avoid naming conflict with BASE_URL in testUtil.js
import { BASE_URL as bul_testtul, formatUpperCaseString } from "../testUtil.js"; // Aliasing the BASE_URL from testUtil.js as bul_testtul to avoid naming conflict with BASE_URL in utils.js

console.log(`Base URL (utils): ${bul_util}`);
console.log(`Base URL (testUtil): ${bul_testtul}`);
console.log(formatTestName("login"));