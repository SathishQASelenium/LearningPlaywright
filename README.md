# LearningPlaywright

Example repository for JavaScript learning snippets used with TheTestingAcademy tutorials. The project is organized by topic and contains beginner-to-advanced JavaScript examples, coding interview tasks, and SDET-focused Playwright-related exercises.

## Project Structure

```
LearningPlaywright/
 chapter_01_Basics/
 chapter_02_Java_Concepts/
 chapter_03_Identifier_Literal_Operators_Statement/
 chapter_04_Operators/
 chapter_05_Statements/
 chapter_06_Switch_Statements/
 chapter_07_Loops/
 chapter_08_Arrays/
 chapter_09_Functions/
 chapter_10_Strings/
 chapter_11_Objects/
 chapter_12_Multi_Dimentional_Arrays/
 chapter_13_Callback/
 chapter_14_Promise/
 chapter_15_Async_Await/
 chapter_16_OOps/
 chapter_17_OOPs_Inheritance/
  chapter_18_Typescript/
  chapter_19_Typescript_Interface/
  chapter_20_Typescript_ENUM/
  Task_Interview_Coding_Questions/
 Test_JavaScript_Basics_Part2_with_Coding/
 Test_Playwright_JavaScript_Part3/
  GitHub_Antigravity_VSCode_Copilot_QA_Tutorial.md
  package.json
  package-lock.json
  tsconfig.json
  README.md
```

## Contents
- `chapter_01_Basics/`  beginner JS examples and environment checks
- `chapter_02_Java_Concepts/`  core JavaScript fundamentals, hoisting, scope, and variables
- `chapter_03_Identifier_Literal_Operators_Statement/`  identifiers, literals, type checks, and equality
- `chapter_04_Operators/`  arithmetic, assignment, comparison, logical, string, ternary, and type operators
- `chapter_05_Statements/`  conditional statements and real-world if/else examples
- `chapter_06_Switch_Statements/`  switch statements, default cases, fall-through, and interview puzzles
- `chapter_07_Loops/`  loops with `for`, `while`, `do..while`, and loop-related exercises
- `chapter_08_Arrays/`  array creation, manipulation, searching, iteration, transformation, sorting, copying, and destructuring
- `chapter_09_Functions/`  functions, arrow functions, default/rest parameters, closures, callbacks, and higher-order functions
- `chapter_10_Strings/`  string manipulation, search, extraction, conversion, and formatting
- `chapter_11_Objects/`  object creation, property descriptors, spread, getters/setters, and object methods
- `chapter_12_Multi_Dimentional_Arrays/`  multi-dimensional array patterns and exercises
- `chapter_13_Callback/`  callback examples, async callbacks, callback hell, and callback-driven exercises
- `chapter_14_Promise/`  Promise basics, error handling, Promise API methods, and interview-style Promise questions
- `chapter_15_Async_Await/`  async/await syntax, sequential and parallel execution, and retry/flaky scenarios
- `chapter_16_OOps/`  object-oriented programming examples, modules, classes, utilities, and encapsulation
- `chapter_17_OOPs_Inheritance/`  inheritance patterns, export/import class examples, and hierarchical/multiple/multi-level/single inheritance
- `chapter_18_Typescript/`  TypeScript basics, types, interfaces, classes, and type safety features
- `chapter_19_Typescript_Interface/`  TypeScript interface examples, interface inheritance, and implementing interfaces with classes
- `chapter_20_Typescript_ENUM/`  TypeScript enums, enum types, and practical enum usage
- `Task_Interview_Coding_Questions/`  interview/coding challenge implementations for JavaScript and testing logic
- `Test_JavaScript_Basics_Part2_with_Coding/`  SDET-style coding exercises and test automation practice tasks
- `Test_Playwright_JavaScript_Part3/`  advanced Playwright JS exercises with callbacks, browser execution planning, and result formatting
- `GitHub_Antigravity_VSCode_Copilot_QA_Tutorial.md`  tutorial on using GitHub Copilot for QA testing

## Prerequisites
- Node.js 18+ recommended
- TypeScript (`npm install -g typescript`)

## Install

```bash
npm install
```

## Playwright Setup (optional)

```bash
npm install -D @playwright/test
npx playwright install
```

## Running examples

Most files are standalone Node scripts. Run any example with:

```bash
node chapter_01_Basics/01_basic.js
```

## Files (detailed)

### Chapter 01: Basics
- `chapter_01_Basics/01_basic.js` — simple greeting and basic JS execution check.
- `chapter_01_Basics/02_JS_Step_by_Step.js` — step-by-step examples of variables, loops, and functions.
- `chapter_01_Basics/03_verify_setup.js` — prints Node/platform info to verify environment.
- `chapter_01_Basics/04_hot_code.js` — small loop/sample to experiment with hot code changes.

### Chapter 02: Core JS Concepts
- `chapter_02_Java_Concepts/05_Core_Comments_JS.js` — comment styles and conventions.
- `chapter_02_Java_Concepts/06_Core_Identifiers_JS.js` — identifiers and naming rules.
- `chapter_02_Java_Concepts/07_var_let_const.js` — differences between `var`, `let`, and `const`.
- `chapter_02_Java_Concepts/08_Lab.js` — hands-on exercises for core concepts.
- `chapter_02_Java_Concepts/09_Hoisting.js` — examples demonstrating hoisting behavior.
- `chapter_02_Java_Concepts/10_Hoisting_var.js` — hoisting specifics for `var`.
- `chapter_02_Java_Concepts/11_Hoisting_function.js` — function hoisting examples.
- `chapter_02_Java_Concepts/12_Hoisitng_if_block.js` — hoisting within blocks and conditionals.
- `chapter_02_Java_Concepts/13_hoisting.js` — additional hoisting variants.
- `chapter_02_Java_Concepts/14_let_hoisting.js` — `let` and block-scoped hoisting behavior.
- `chapter_02_Java_Concepts/15_let_block.js` — block scope examples for `let`.
- `chapter_02_Java_Concepts/16_var_if_block.js` — `var` inside conditional blocks.
- `chapter_02_Java_Concepts/17_rogit.js` — misc examples and small experiments.
- `chapter_02_Java_Concepts/18_const.js` — using `const` and immutability patterns.

### Chapter 03: Identifiers, Literals, Operators, Statements
- `chapter_03_Identifier_Literal_Operators_Statement/19_Identifier.js` — identifier rules and examples.
- `chapter_03_Identifier_Literal_Operators_Statement/20_Literals.js` — literal types and usage.
- `chapter_03_Identifier_Literal_Operators_Statement/21_Literals_all.js` — comprehensive literal examples.
- `chapter_03_Identifier_Literal_Operators_Statement/22_null_Typeof.js` — `null`, `typeof`, and related quirks.
- `chapter_03_Identifier_Literal_Operators_Statement/23_null_undefined.js` — `null` vs `undefined` comparisons.
- `chapter_03_Identifier_Literal_Operators_Statement/24_equals_tripleequals.js` — `==` vs `===` behavior.
- `chapter_03_Identifier_Literal_Operators_Statement/25_IQ.js` — interview-style questions on types and operators.

### Chapter 04: Operators
- `chapter_04_Operators/26_Arithmetic_Operator.js` — arithmetic operations and increment/decrement.
- `chapter_04_Operators/27_Assignment_Operators.js` — assignment operator examples.
- `chapter_04_Operators/28_Comparsion_Operators.js` — comparison operator examples.
- `chapter_04_Operators/29_Logical_Operators.js` — logical operators (`&&`, `||`, `!`).
- `chapter_04_Operators/30_String_Operators.js` — string concatenation and operations.
- `chapter_04_Operators/31_Ternary_Operators.js` — ternary operator usage.
- `chapter_04_Operators/31_Type_Operators.js` — `typeof`, `instanceof` and type checks.
- `chapter_04_Operators/32_Null_Optional_Value.js` — nullish coalescing (`??`) and optional chaining (`?.`).

### Chapter 05: Statements & Control Flow
- `chapter_05_Statements/33_Statement.js` — statement structure and basic examples.
- `chapter_05_Statements/34_If_else_If.js` — if / else-if examples.
- `chapter_05_Statements/35_REAL_LIVE_Example.js` — practical conditional examples.
- `chapter_05_Statements/36_API_IF_ELSE.js` — conditional handling for API-like responses.
- `chapter_05_Statements/37_IQ_IF_ESLE.js` — interview-style if/else puzzles.
- `chapter_05_Statements/38_Logical_Op_IF_ELSE.js` — using logical operators inside conditions.
- `chapter_05_Statements/39_IQ.js` — interview questions and edge cases.
- `chapter_05_Statements/40_REAL_IF_ELSE.js` — additional real-world conditional examples.
- `chapter_05_Statements/41_IQ.js` — more interview-style conditional problems.

### Chapter 06: Switch Statements
- `chapter_06_Switch_Statements/42_Switch.js` — basic switch usage.
- `chapter_06_Switch_Statements/42_Switch_with_Default.js` — switch with default case.
- `chapter_06_Switch_Statements/42_Switch_without_Break.js` — fall-through behavior without `break`.
- `chapter_06_Switch_Statements/45_Switch_REAL_EXAMPLE.js` — real-world switch example.
- `chapter_06_Switch_Statements/46_Switch_GroupCase.js` — grouped cases and handling multiple values.
- `chapter_06_Switch_Statements/47_IQ_BUG.js` — debugging switch-related pitfalls.
- `chapter_06_Switch_Statements/48_IQ.js` — interview-style switch questions.
- `chapter_06_Switch_Statements/49_Switch_IQ.js` — additional interview problems.
- `chapter_06_Switch_Statements/50_Switch_IQ.js` — additional interview problems.
- `chapter_06_Switch_Statements/51_Switch_IQ.js` — additional interview problems.
- `chapter_06_Switch_Statements/52_User_Input.js` — example reading user input and using switch.

### Chapter 07: Loops
- `chapter_07_Loops/53_Loops.js` — loop overview and examples.
- `chapter_07_Loops/54_Incremnt_operator.js` — increment operator usages.
- `chapter_07_Loops/55_Incremnt_operator2.js` — more increment/decrement examples.
- `chapter_07_Loops/56_For_Loops.js` — `for` loop examples.
- `chapter_07_Loops/57_For_Loop.js` — additional `for` loop exercises.
- `chapter_07_Loops/58_For_Loop2.js` — more `for` loop variants.
- `chapter_07_Loops/59_While_Loop.js` — `while` loop examples.
- `chapter_07_Loops/60_While_2.js` — additional `while` loop exercises.
- `chapter_07_Loops/61_DO_while.js` — `do..while` examples.
- `chapter_07_Loops/62_DO_while_2.js` — more `do..while` exercises.

### Chapter 08: Arrays
- `chapter_08_Arrays/63_Arrays_Creation.js` — array creation methods (literal, constructor, `Array.of()`, `Array.from()`).
- `chapter_08_Arrays/64_Arrays_Access_Modify.js` — accessing elements by index, `.at()`, and modifying values.
- `chapter_08_Arrays/65_Arrays_Adding_Remove.js` — adding/removing with `push`, `pop`, `unshift`, `shift`, and `splice`.
- `chapter_08_Arrays/66_Arrays_REAL.js` — real-world array operations with browser list example.
- `chapter_08_Arrays/67_Arrays_Searching.js` — searching with `indexOf`, `includes`, `find`, `findIndex`, `findLast`.
- `chapter_08_Arrays/68_Arrays_Iterating.js` — iterating with `for`, `for...of`, `forEach`, `entries()`, `for...in`.
- `chapter_08_Arrays/69_Arrays_Transforming_Arrays.js` — transforming with `map`, `filter`, `reduce`, and `flat`.
- `chapter_08_Arrays/70_Arrays_Sorting.js` — sorting arrays alphabetically and numerically with compare functions.
- `chapter_08_Arrays/71_Arrays_Slicing.js` — slicing arrays with `slice()`, concatenation with `concat()` and spread operator, joining arrays.
- `chapter_08_Arrays/72_Arrays_Checking.js` — checking if a value is an array with `Array.isArray()`, using `every()` and `some()` for conditional checks.
- `chapter_08_Arrays/73_Arrays_Copying_Shallow_Deep.js` — shallow and deep copying arrays using spread, `slice()`, `Array.from()`, and `concat()`.
- `chapter_08_Arrays/74_Arrays_Destructuring.js` — array destructuring to extract elements into variables.
- `chapter_08_Arrays/75_Task.js` — task demonstrating shallow copy behavior and reference sharing in arrays.

### Chapter 09: Functions
- `chapter_09_Functions/76_Functions.js` — function basics and introduction.
- `chapter_09_Functions/77_Type1_Fn_Basic_Functions.js` — basic function types.
- `chapter_09_Functions/78_Type2_Fn_With_Arg_No_Return.js` — functions with arguments but no return.
- `chapter_09_Functions/79_Type3_Fn_without_Arg_Return_Type.js` — functions without arguments but with return.
- `chapter_09_Functions/80_Type4_Fn_With_Arg_With_Return.js` — functions with arguments and return.
- `chapter_09_Functions/81_Ex.js` — function exercises.
- `chapter_09_Functions/82_Fn_Expression.js` — function expressions and usage.
- `chapter_09_Functions/83_Fn_Arrow.js` — arrow function syntax and examples.
- `chapter_09_Functions/84_Ex_API_Testing.js` — API testing examples with functions.
- `chapter_09_Functions/85_Fn_IIFE.js` — Immediately Invoked Function Expressions (IIFE).
- `chapter_09_Functions/86_IQ.js` — interview-style function questions.
- `chapter_09_Functions/87_Default_Parameter.js` — default parameters in functions.
- `chapter_09_Functions/88_Rest_Parameters_Fn.js` — rest parameters and spread operator.
- `chapter_09_Functions/89_IQ_Fn.JS` — additional interview-style function problems.
- `chapter_09_Functions/90_Spread_Fn.js` — spread operator in functions.
- `chapter_09_Functions/91_Return_Values_Fn.js` — return values from functions.
- `chapter_09_Functions/92_Hoisting_Fn.js` — function hoisting.
- `chapter_09_Functions/93_Scope_Fn.js` — scope in functions.
- `chapter_09_Functions/94_Closure.js` — closures introduction.
- `chapter_09_Functions/95_Closure_Part2.js` — closures practice.
- `chapter_09_Functions/96_Closures_Part3.js` — closures advanced.
- `chapter_09_Functions/97_Closure_Part4.js` — closures deep dive.
- `chapter_09_Functions/98_Higher_Order_Fn.js` — higher-order functions.
- `chapter_09_Functions/99_Pure_Fn.js` — pure functions.
- `chapter_09_Functions/100_Callback_Fn.js` — callback functions.
- `chapter_09_Functions/101_Callback_me.js` — callback exercises.

### Chapter 10: Strings
- `chapter_10_Strings/102_Strings.js` — string creation and basic operations.
- `chapter_10_Strings/103_String_Properties.js` — string properties and length.
- `chapter_10_Strings/104_Strings_Search_Check.js` — searching and checking within strings using `indexOf`, `includes`, `startsWith`, `endsWith`, `search`.
- `chapter_10_Strings/105_Strings_Extracting.js` — extracting substrings with `slice`, `substring`, `substr`, and `charAt`.
- `chapter_10_Strings/106_Strings_Transforming.js` — transforming strings with `toUpperCase`, `toLowerCase`, `trim`, `padStart`, `padEnd`, `replace`, `replaceAll`, `split`.
- `chapter_10_Strings/107_Strings_Conversion.js` — converting between strings and other types (`String()`, `toString()`, `JSON.stringify`, template literals).

### Chapter 11: Objects
- `chapter_11_Objects/108_Objects.js` — object creation and basic operations.
- `chapter_11_Objects/109_Objects_Consts.js` — objects with const and their behavior.
- `chapter_11_Objects/110_Objects.js` — additional object examples.
- `chapter_11_Objects/111_Primitive_Ref.js` — primitive vs reference type behavior.
- `chapter_11_Objects/112_Object_Property_Desciptor.js` — property descriptors and their attributes.
- `chapter_11_Objects/113_Objects.js` — additional object examples.
- `chapter_11_Objects/114_Object_Dec.js` — object declaration patterns.
- `chapter_11_Objects/115_Spread_Objects.js` — spread operator with objects.
- `chapter_11_Objects/116_GETTER_SETTER.js` — getters and setters in objects.
- `chapter_11_Objects/117_Objects_methods.js` — object methods and this context.
- `chapter_11_Objects/118_REAL_Object.js` — real-world object usage examples.
- `chapter_11_Objects/119_Let_const_Objects.js` — `let` vs `const` with objects.

### Chapter 12: Multi-Dimensional Arrays
- `chapter_12_Multi_Dimentional_Arrays/120_MD_Array.js` — multi-dimensional array creation, access, and operations.
- `chapter_12_Multi_Dimentional_Arrays/121_MD_Array_Part2.js` — additional multi-dimensional array operations.
- `chapter_12_Multi_Dimentional_Arrays/122_MD_Array_Funtions.js` — functions with multi-dimensional arrays.
- `chapter_12_Multi_Dimentional_Arrays/123_MD_Pattern_RIGHT.js` — right-side pattern using multi-dimensional arrays.
- `chapter_12_Multi_Dimentional_Arrays/124_MD_Left_hand.js` — left-hand pattern exercises.
- `chapter_12_Multi_Dimentional_Arrays/125_Pyramid_Pattern.js` — pyramid pattern implementation.

### Chapter 13: Callbacks
- `chapter_13_Callback/126_Callback.js` — callback function basics and introduction.
- `chapter_13_Callback/127_Sync_Callback.js` — synchronous callback examples.
- `chapter_13_Callback/128_Async_Callback.js` — asynchronous callback usage.
- `chapter_13_Callback/129_Callback_hell.js` — callback hell and pyramid of doom problem.
- `chapter_13_Callback/130_Call_Ex01_.js` — callback exercise example 1.
- `chapter_13_Callback/131_Callback_Return.js` — returning values from callbacks.
- `chapter_13_Callback/132_Pyramid_of_Doom.js` — managing nested callbacks and avoiding pyramid of doom.

### Chapter 14: Promises
- `chapter_14_Promise/133_Promise.js` — Promise basics, creation, and basic usage.
- `chapter_14_Promise/134_Promise_API.js` — Promise API methods and static helpers.
- `chapter_14_Promise/135_Promise_Catch.js` — error handling with `.catch()`.
- `chapter_14_Promise/136_Promise_Finally.js` — `.finally()` for cleanup operations.
- `chapter_14_Promise/137_REAL_Promise.js` — real-world Promise usage examples.
- `chapter_14_Promise/138_Promise_ALL.js` — `Promise.all` for parallel execution.
- `chapter_14_Promise/139_Promise_AllSettled.js` — `Promise.allSettled` for collecting all results.
- `chapter_14_Promise/140_Promise.race.js` — `Promise.race` for fastest result.
- `chapter_14_Promise/141_Promise_IQ.js` — interview-style Promise questions.

### Chapter 15: Async/Await
- `chapter_15_Async_Await/142_Async_Await.js` — async/await syntax basics and usage.
- `chapter_15_Async_Await/143_Coverted_Code.js` — converting Promise code to async/await.
- `chapter_15_Async_Await/144_AA.js` — async/await practice exercises.
- `chapter_15_Async_Await/145_Try_Catch.js` — error handling with try/catch in async functions.
- `chapter_15_Async_Await/146_Sequential_Execution.js` — sequential execution with async/await.
- `chapter_15_Async_Await/147_Parallel_Execution.js` — parallel execution using `Promise.all` with async/await.
- `chapter_15_Async_Await/148_IQ.js` — interview-style async/await questions.
- `chapter_15_Async_Await/149_API_REAL_FLAKY.js` — handling flaky API tests with retries.

### Chapter 16: Object-Oriented Programming (OOps)
- `chapter_16_OOps/150_Export_Import.js` — export and import modules.
- `chapter_16_OOps/151_Export_Import.js` — more export/import patterns and named exports.
- `chapter_16_OOps/152_Logger.js` — logger utility using export/import.
- `chapter_16_OOps/153_Class_Objects.js` — class and object basics.
- `chapter_16_OOps/154_Car.js` — class example with car objects.
- `chapter_16_OOps/155_Class_Object_Browser.js` — browser automation with classes and objects.
- `chapter_16_OOps/156_Browser.js` — additional browser class examples.
- `chapter_16_OOps/157_IQ.js` — interview-style OOP questions.
- `chapter_16_OOps/logger.js` — logger utility.
- `chapter_16_OOps/testUtil.js` — test utility functions.
- `chapter_16_OOps/utils.js` — general utility functions.
- `chapter_16_OOps/CLASS_OBJECT/158_Private_Public.js` — private and public members in classes.
- `chapter_16_OOps/CLASS_OBJECT/159_Static.js` — static methods and properties.
- `chapter_16_OOps/CLASS_OBJECT/160_Static_p2.js` — advanced static member usage.
- `chapter_16_OOps/CLASS_OBJECT/ENCAPSULATION/161_Meeti_Child.js` — child class inheritance example.
- `chapter_16_OOps/CLASS_OBJECT/ENCAPSULATION/162_Car.js` — car class with encapsulation.
- `chapter_16_OOps/CLASS_OBJECT/ENCAPSULATION/163_Bank.js` — bank account class with encapsulation.

### Chapter 17: OOPs Inheritance
- `chapter_17_OOPs_Inheritance/Exporting_Class/` — class export examples.
- `chapter_17_OOPs_Inheritance/Hierarchial_Inheritance/` — hierarchical inheritance patterns.
- `chapter_17_OOPs_Inheritance/Multiple_Inheritance/` — multiple inheritance examples.
- `chapter_17_OOPs_Inheritance/Multi_Level_Inheritance/` — multi-level inheritance structures.
- `chapter_17_OOPs_Inheritance/Single_Inheritance/` — single inheritance examples.

### Chapter 18: TypeScript
- `chapter_18_Typescript/` — TypeScript basics, types, interfaces, classes, and type safety features.

### Task: Interview / Coding Questions
- `Task_Interview_Coding_Questions/` — interview and coding challenge implementations for arrays, loops, functions, objects, OOP, and test-driven logic.
- `Task_Interview_Coding_Questions/34_TS_Task1.ts` — TypeScript task 1
- `Task_Interview_Coding_Questions/35_TS_Task2.ts` — TypeScript task 2
- `Task_Interview_Coding_Questions/36_Interface_Task1.ts` — Interface task 1
- `Task_Interview_Coding_Questions/37_Interface_Task2.ts` — Interface task 2
- `Task_Interview_Coding_Questions/38_Interface_Task3.ts` — Interface task 3
- `Task_Interview_Coding_Questions/39_Interface_Task4.ts` — Interface task 4

### Test: JavaScript Basics Part 2 with Coding
- `Test_JavaScript_Basics_Part2_with_Coding/` — SDET-focused JavaScript exercises for API status validation, test reporting, retries, visibility checks, data generation, and mini test runner logic.

### Test: Playwright JavaScript Part 3
- `Test_Playwright_JavaScript_Part3/` — advanced Playwright JavaScript exercises with callback-driven step runners, result summarizers, locator message normalization, and browser execution planning.

## What's updated in this project
- Added `chapter_18_Typescript/` with TypeScript fundamentals and examples.
- Added `chapter_19_Typescript_Interface/` with TypeScript interface examples and interface inheritance.
- Added `chapter_20_Typescript_ENUM/` with TypeScript enum types and practical enum usage.
- Added TypeScript configuration with `tsconfig.json`.
- Added TypeScript tasks in `Task_Interview_Coding_Questions/34_TS_Task1.ts` and `35_TS_Task2.ts`.
- Added Interface tasks in `Task_Interview_Coding_Questions/36_Interface_Task1.ts` through `39_Interface_Task4.ts`.
- Added `chapter_17_OOPs_Inheritance/` with inheritance-focused JavaScript examples.
- Expanded `chapter_16_OOps/` with class utilities, module exports/imports, and encapsulation demos.
- Added new SDET exercise collections in `Test_JavaScript_Basics_Part2_with_Coding/` and `Test_Playwright_JavaScript_Part3/`.
- Maintains Playwright dependency in `package.json` for browser automation learning.

## Notes
- These files are learning snippets and intentionally concise.
- They can be converted into Playwright tests, enhanced with richer comments, or reorganized into a test suite.
- `package-lock.json` is included to lock dependency versions for reproducible installs.

## Quick Tip
- Arrow functions don’t have their own `this`; they inherit it from the surrounding scope. When used as object methods, they behave differently than regular function methods.
