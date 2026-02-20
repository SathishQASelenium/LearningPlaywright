# LearningPlaywright

Example repository for Playwright and Node.js learning exercises. It contains small example scripts used while following TheTestingAcademy tutorials.

## Contents
- `chapter_01_Basics/` — beginner JS examples used to verify environment and experiment with small scripts
- `chapter_02_Java_Concepts/` — core JavaScript concepts (variables, hoisting, block scope)
- `chapter_03_Identifier_Literal_Operators_Statement/` — identifiers, literals, operators, and statements in JS

## Prerequisites
- Node.js (14+ recommended)

## Install (if you plan to use Playwright)

```bash
npm install -D @playwright/test
npx playwright install
```

## Run (examples)

Most files in these chapters are standalone Node scripts — run them with `node path/to/file.js`.

For example:
```bash
node chapter_01_Basics/01_basic.js
```

## Files (detailed)

### Chapter 01: Basics
- **`chapter_01_Basics/01_basic.js`**:
	- Very small example that prints a greeting to the console. Use it to confirm Node can run a script.

- **`chapter_01_Basics/02_JS_Step_by_Step.js`**:
	- Demonstrates basic JavaScript variables, a `for` loop and function calls.

- **`chapter_01_Basics/03_verify_setup.js`**:
	- Prints platform, CPU architecture, and Node.js version information to help verify your runtime environment.

- **`chapter_01_Basics/04_hot_code.js`**:
	- Small CPU-bound loop useful for experimenting with hot-code editing.

### Chapter 02: Core JS Concepts
Contains examples explaining JavaScript fundamentals:
- **Comments & Identifiers**: `05_Core_Comments_JS.js`, `06_Core_Identifiers_JS.js`
- **Variables (var, let, const)**: `07_var_let_const.js`, `18_const.js`
- **Hoisting**: Examples demonstrating variable and function hoisting (`09_Hoisting.js`, `10_Hoisting_var.js`...)
- **Block Scope**: `15_let_block.js`, `16_var_if_block.js`

### Chapter 03: Identifiers, Literals, Operators
Focuses on data types and operators:
- **Identifiers & Literals**: `19_Identifier.js`, `20_Literals.js`, `21_Literals_all.js`
- **Types & Equality**: `22_null_Typeof.js`, `23_null_undefined.js`, `24_equals_tripleequals.js`
- **Interview Questions**: `25_IQ.js` - tricky interview questions related to JS types and operators.

## Notes
- These are learning snippets — they are intentionally minimal. If you want, I can convert them into Playwright tests, add comments, or reorganize into a test suite.

