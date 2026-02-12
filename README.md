# LearningPlaywright

Example repository for Playwright and Node.js learning exercises. It contains small example scripts used while following TheTestingAcademy tutorials.

## Contents
- `chapter_01_Basics/` — beginner JS examples used to verify environment and experiment with small scripts

## Prerequisites
- Node.js (14+ recommended)

## Install (if you plan to use Playwright)

```bash
npm install -D @playwright/test
npx playwright install
```

## Run (examples)

Most files in `chapter_01_Basics` are standalone Node scripts — run them with:

```bash
node chapter_01_Basics/01_basic.js
node chapter_01_Basics/02_JS_Step_by_Step.js
node chapter_01_Basics/03_verify_setup.js
node chapter_01_Basics/04_hot_code.js
```

## Files (detailed)

- **`chapter_01_Basics/01_basic.js`** ([view file](chapter_01_Basics/01_basic.js#L1)):
	- Very small example that prints a greeting to the console. Use it to confirm Node can run a script.

- **`chapter_01_Basics/02_JS_Step_by_Step.js`** ([view file](chapter_01_Basics/02_JS_Step_by_Step.js#L1)):
	- Demonstrates basic JavaScript variables, a `for` loop and function calls. The loop prints numbers and calls a `print()` helper which prints `Hello`.
	- Note: the script currently declares `let a = 10;` and then shadows `a` in the `for` loop — this is intentional for demonstration but may be confusing if modified.

- **`chapter_01_Basics/03_verify_setup.js`** ([view file](chapter_01_Basics/03_verify_setup.js#L1)):
	- Prints platform, CPU architecture, and Node.js version information to help verify your runtime environment.

- **`chapter_01_Basics/04_hot_code.js`** ([view file](chapter_01_Basics/04_hot_code.js#L1)):
	- Small CPU-bound loop that repeatedly calls an `add(a,b)` function 10,000 times and prints the final result. Useful for experimenting with edits and re-running (hot-code editing during development).

## Notes
- These are learning snippets — they are intentionally minimal. If you want, I can convert them into Playwright tests, add comments, or reorganize into a test suite.

