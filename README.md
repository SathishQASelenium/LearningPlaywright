# LearningPlaywright

Example repository for Playwright and Node.js learning exercises. It contains small example scripts used while following TheTestingAcademy tutorials.

## Contents
- `chapter_01_Basics/` — beginner JS examples used to verify environment and experiment with small scripts
- `chapter_02_Java_Concepts/` — core JavaScript concepts (variables, hoisting, block scope)
- `chapter_03_Identifier_Literal_Operators_Statement/` — identifiers, literals, operators, and statements in JS
- `chapter_04_Operators/` — arithmetic, assignment, comparison, logical, string, ternary, and type operators
- `chapter_05_Statements/` — control flow with if/else, real-world examples, and coding tasks

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

### Chapter 04: Operators
Covers all major JavaScript operator categories:
- **Arithmetic**: `26_Arithmetic_Operator.js` — addition, subtraction, multiplication, division, modulus, increment, decrement
- **Assignment**: `27_Assignment_Operators.js` — `=`, `+=`, `-=`, `*=`, etc.
- **Comparison**: `28_Comparsion_Operators.js` — `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical**: `29_Logical_Operators.js` — `&&`, `||`, `!`
- **String**: `30_String_Operators.js` — string concatenation with `+`
- **Ternary**: `31_Ternary_Operators.js` — conditional (ternary) operator `condition ? a : b`
- **Type**: `31_Type_Operators.js` — `typeof` and `instanceof`
- **Nullish/Optional**: `32_Null_Optional_Value.js` — nullish coalescing (`??`) and optional chaining (`?.`)

### Chapter 05: Statements & Control Flow
Control flow, conditional logic, and hands-on coding tasks:
- **Statements Intro**: `33_Statement.js` — basic statement structure
- **If / Else If**: `34_If_else_If.js` — conditional branching
- **Real-World Example**: `35_REAL_LIVE_Example.js` — practical if/else usage
- **API If/Else**: `36_API_IF_ELSE.js` — conditionals with API response handling
- **Interview Questions**: `37_IQ_IF_ESLE.js`, `39_IQ.js` — tricky if/else interview problems
- **Logical Operators in Conditions**: `38_Logical_Op_IF_ELSE.js` — combining logical operators with if/else
- **Real If/Else**: `40_REAL_IF_ELSE.js` — real-world conditional examples
- **Tasks**:
  - `01_Task_GradeCalculator.js` — grade calculator using if/else
  - `02_Task_FizzBuzz.js` — classic FizzBuzz challenge

## Notes
- These are learning snippets — they are intentionally minimal. If you want, I can convert them into Playwright tests, add comments, or reorganize into a test suite.

