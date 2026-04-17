# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### JavaScript Development
- Run a specific JS example: `node <path_to_file>.js` (e.g., `node chapter_01_Basics/01_basic.js`)
- Install dependencies: `npm install`

### TypeScript Development
- Compile TypeScript files: `npx tsc`

### Playwright Testing
- Install Playwright test runner: `npm install -D @playwright/test`
- Install browsers: `npx playwright install`
- Run tests: `npx playwright test`

## Project Architecture

This repository is a structured learning resource for JavaScript, TypeScript, and Playwright, organized into chapters and practice sets.

### Structure
- `chapter_01_Basics/` to `chapter_17_Inheritance/`: Sequential JavaScript learning modules covering fundamentals, data structures, async programming, and OOP.
- `chapter_18_Typescript/` to `chapter_22_Typescript_PRIVATE_PROTECTED_PUBLIC/`: TypeScript-specific modules focusing on type safety, interfaces, enums, generics, and access modifiers.
- `Task_Interview_Coding_Questions/`: Practical coding challenges for interview preparation.
- `Test_JavaScript_Basics_Part2_with_Coding/`: SDET-focused coding exercises.
- `Test_Playwright_JavaScript_Part3/`: Advanced Playwright automation exercises.

### Key Technologies
- **Runtime**: Node.js
- **Language**: JavaScript (ESNext) and TypeScript
- **Testing Framework**: Playwright
- **TypeScript Config**: Uses `nodenext` module resolution and `esnext` target for modern JS/TS support.
