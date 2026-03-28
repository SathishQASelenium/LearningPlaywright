# LearningPlaywright

Example repository for small JavaScript learning snippets used with TheTestingAcademy tutorials. Files are organized by topic (basics, core JS concepts, operators, statements, loops, switch statements, and coding tasks).

## Project Structure

```
LearningPlaywright/
├── chapter_01_Basics/                     # Beginner JS examples and environment checks
├── chapter_02_Java_Concepts/              # Core JavaScript concepts (comments, identifiers, variables, hoisting, scope)
├── chapter_03_Identifier_Literal_Operators_Statement/  # Identifiers, literals, types, and equality
├── chapter_04_Operators/                 # Arithmetic, assignment, comparison, logical, string, ternary, and type operators
├── chapter_05_Statements/                # Control flow with if/else and related examples
├── chapter_06_Switch_Statements/          # Switch statement examples and interview-style problems
├── chapter_07_Loops/                     # Loop constructs and loop tasks
├── chapter_08_Arrays/                    # Array creation, manipulation, searching, iterating, transforming, and sorting
├── chapter_09_Functions/                 # Function basics, types, arrow functions, default parameters, rest parameters, IIFE
├── chapter_10_Strings/                   # String creation, properties, searching, extracting, transforming, and conversion
├── chapter_11_Objects/                  # Object creation, properties, descriptors, spread, getters/setters, and methods
├── chapter_12_Multi_Dimentional_Arrays/  # Multi-dimensional array examples and operations
├── chapter_13_Callback/                  # Callback functions, synchronous and asynchronous examples, callback hell, and patterns
├── Task_Interview_Coding_Questions/      # Standalone interview/coding challenge implementations
├── Test_JavaScript_Basics_Part2_with_Coding/  # SDET-focused coding exercises
├── Test_Playwright_JavaScript_Part3/     # Advanced Playwright JS exercises with callbacks
├── GitHub_Antigravity_VSCode_Copilot_QA_Tutorial.md  # Tutorial on using GitHub Copilot for QA testing
├── package.json                          # Project dependencies (Playwright)
├── package-lock.json                     # Lockfile for dependencies
└── README.md                             # This file
```

## Contents
- `chapter_01_Basics/` — beginner JS examples and environment checks
- `chapter_02_Java_Concepts/` — core JavaScript concepts (comments, identifiers, variables, hoisting, scope)
- `chapter_03_Identifier_Literal_Operators_Statement/` — identifiers, literals, types, and equality
- `chapter_04_Operators/` — arithmetic, assignment, comparison, logical, string, ternary, and type operators
- `chapter_05_Statements/` — control flow with if/else and related examples
- `chapter_06_Switch_Statements/` — switch statement examples and interview-style problems
- `chapter_07_Loops/` — loop constructs and loop tasks
- `chapter_08_Arrays/` — array creation, manipulation, searching, iterating, transforming, and sorting
- `chapter_09_Functions/` — function basics, types, arrow functions, default parameters, rest parameters, IIFE, and examples
- `chapter_10_Strings/` — string creation, properties, searching, extracting, transforming, and conversion
- `chapter_11_Objects/` — object creation, properties, descriptors, spread, getters/setters, and methods
- `chapter_12_Multi_Dimentional_Arrays/` — multi-dimensional array examples and operations
- `chapter_13_Callback/` — callback functions, synchronous and asynchronous examples, callback hell, and patterns
- `Task_Interview_Coding_Questions/` — standalone interview/coding challenge implementations
- `Test_JavaScript_Basics_Part2_with_Coding/` — SDET-focused coding exercises covering real-world testing scenarios
- `Test_Playwright_JavaScript_Part3/` — Advanced Playwright JS exercises with callbacks
- `GitHub_Antigravity_VSCode_Copilot_QA_Tutorial.md` — Tutorial on using GitHub Copilot for QA testing

## Prerequisites
- Node.js (18+ recommended)

## Install (optional: Playwright)

```bash
npm install -D @playwright/test
npx playwright install
```

## Running examples

Most files are standalone Node scripts. Run with:

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
- `chapter_02_Java_Concepts/17_rogit.js` — misc examples (small experiments).
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
- `chapter_05_Statements/39_IQ.js` — interview questions and edge-cases.
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

### Task: Interview / Coding Questions
- `Task_Interview_Coding_Questions/01_GradeCalculator.js` — grade calculator implementation.
- `Task_Interview_Coding_Questions/02_FizzBuzz.js` — FizzBuzz problem implementation.
- `Task_Interview_Coding_Questions/03_TriangleClassifier.js` — classify triangles by side lengths.
- `Task_Interview_Coding_Questions/04_LeapYearChecker.js` — leap-year checking logic.
- `Task_Interview_Coding_Questions/05_Increment_Decrement.js` — increment/decrement behavior exercises.
- `Task_Interview_Coding_Questions/06_For_Loop_Task1.js` — for-loop challenge 1.
- `Task_Interview_Coding_Questions/07_For_Loop_Task2.js` — for-loop challenge 2.
- `Task_Interview_Coding_Questions/08_For_Loop_Task3.js` — for-loop challenge 3.
- `Task_Interview_Coding_Questions/09_For_Loop_Task4.js` — for-loop challenge 4.
- `Task_Interview_Coding_Questions/10_For_Loop_Task5.js` — for-loop challenge 5.
- `Task_Interview_Coding_Questions/11_While_Loop_Task1.js` — while-loop challenge 1.
- `Task_Interview_Coding_Questions/12_While_Loop_Task2.js` — while-loop challenge 2.
- `Task_Interview_Coding_Questions/13_While_Loop_Task3.js` — while-loop challenge 3.
- `Task_Interview_Coding_Questions/14_While_Loop_Task4.js` — while-loop challenge 4.
- `Task_Interview_Coding_Questions/15_While_Loop_Task5.js` — while-loop challenge 5.
- `Task_Interview_Coding_Questions/16_Arrays_API_Response_Validation.js` — validate API responses using array methods.
- `Task_Interview_Coding_Questions/17_Arrays_Spot_the_Bug.js` — fix array sorting bug in response times.
- `Task_Interview_Coding_Questions/18_Deep_vs_Shallow_Copy.js` — understand shallow copy reference behavior.
- `Task_Interview_Coding_Questions/19_Functions_Task_17032026.js` — function tasks and exercises.
- `Task_Interview_Coding_Questions/20_Functions_Strings_19032026.js` — functions and strings combined exercises.
- `Task_Interview_Coding_Questions/21_Objects_24032026.js` — objects exercises and practice.
- `Task_Interview_Coding_Questions/22_2D_RightTriangle.js` — 2D right triangle pattern.
- `Task_Interview_Coding_Questions/23_2D_Inverted_Pyramid.js` — 2D inverted pyramid pattern.

### Test: Playwright JavaScript Part 3
Advanced SDET-focused coding exercises with callbacks and real-world testing scenarios:
- `Test_Playwright_JavaScript_Part3/01_Playwright_Result_Summary_Generator.js` — generate summary reports from Playwright test results.
- `Test_Playwright_JavaScript_Part3/02_Build_Test_Users_from_Arrays.js` — build test user objects from separate arrays.
- `Test_Playwright_JavaScript_Part3/03_Normalize_Locator_Error_Messages.js` — normalize and format locator error messages.
- `Test_Playwright_JavaScript_Part3/04_Browser_Execution_Planner.js` — plan browser execution based on test priorities.
- `Test_Playwright_JavaScript_Part3/05_Reusable_Step_Runner_with_Callback.js` — implement reusable step runner with callback support.

### Test: JavaScript Basics Part 2 with Coding
SDET-focused coding exercises that apply JavaScript fundamentals to real-world testing scenarios:
- `Test_JavaScript_Basics_Part2_with_Coding/01_API_Response_Status_Code_Validator.js` — classify HTTP status codes using switch statements.
- `Test_JavaScript_Basics_Part2_with_Coding/02_Test_Case_Result_Counter.js` — count pass/fail/skip results and generate a test report.
- `Test_JavaScript_Basics_Part2_with_Coding/03_Retry_Failed_API_Call.js` — simulate retrying failed API calls with loops.
- `Test_JavaScript_Basics_Part2_with_Coding/04_Element_Visibility_Checker.js` — check UI element visibility conditions.
- `Test_JavaScript_Basics_Part2_with_Coding/05_Test_Data_Generator.js` — generate test data programmatically.
- `Test_JavaScript_Basics_Part2_with_Coding/06_Bug_Severity_Classifier.js` — classify bug severity using frequency and impact matrix.
- `Test_JavaScript_Basics_Part2_with_Coding/07_Response_Time_SLA_Analyzer.js` — analyze API response times against SLA thresholds.
- `Test_JavaScript_Basics_Part2_with_Coding/08_Test_Environment_Config.js` — manage test environment configurations.
- `Test_JavaScript_Basics_Part2_with_Coding/09_Login_Brute-Force_Detection.js` — detect brute-force login attempts.
- `Test_JavaScript_Basics_Part2_with_Coding/10_Mini_Test_Suite_Runner.js` — mini test runner combining all JS topics (loops, switch, operators, type checks).

## Notes
- These files are learning snippets and intentionally concise. They can be:
  - Converted into Playwright tests,
  - Enhanced with richer comments and examples,
  - Or reorganized into a testable suite if needed.

## Quick Tip: Arrow functions & `this`
- Arrow functions don’t have their own `this`; they inherit it from the surrounding scope. When used as object methods, they typically do **not** behave like regular function methods.
