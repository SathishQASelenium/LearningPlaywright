# LearningPlaywright

Example repository for JavaScript learning snippets used with TheTestingAcademy tutorials. The project is organized by topic and contains beginner-to-advanced JavaScript examples, coding interview tasks, and SDET-focused Playwright-related exercises.

## Project Structure

```
LearningPlaywright/
├── chapter_01_Basics/          — JS environment setup and first steps
├── chapter_02_Java_Concepts/   — var/let/const, hoisting, scope
├── chapter_03_Iden_Lit_Op/    — identifiers, literals, operators
├── chapter_04_Operators/       — arithmetic, logical, ternary, type
├── chapter_05_Statements/     — if/else conditions
├── chapter_06_Switch/         — switch statements and fall-through
├── chapter_07_Loops/           — for, while, do-while loops
├── chapter_08_Arrays/         — map, filter, reduce, sort, destructure
├── chapter_09_Functions/      — arrow fn, closures, HOF, callbacks
├── chapter_10_Strings/        — manipulation, template literals
├── chapter_11_Objects/        — properties, getters/setters, this
├── chapter_12_MD_Arrays/      — 2D/3D arrays and patterns
├── chapter_13_Callbacks/      — sync/async callbacks, callback hell
├── chapter_14_Promises/       — Promise.all/race, error handling
├── chapter_15_Async_Await/    — sequential/parallel execution
├── chapter_16_OOps/           — classes, modules, encapsulation
├── chapter_17_Inheritance/    — single, multi-level, hierarchical
├── chapter_18_Typescript/     — types, interfaces, type safety
├── chapter_19_TS_Interface/   — interface inheritance, implements
├── chapter_20_TS_Enum/        — const enum, string/numeric enum
├── chapter_21_TS_Generics/    — generic functions, interfaces, classes
├── chapter_22_TS_Access/      — private, protected, public, readonly
├── Task_Interview_Coding/     — array, loop, function challenges
├── Test_JS_Part2/            — SDET coding exercises
├── Test_Playwright_Part3/     — Playwright advanced exercises
└── package.json, tsconfig.json, README.md
```

## Learning Path

```
Basics → Java Concepts → Operators → Statements → Switch → Loops
    ↓
Arrays → Functions → Strings → Objects → Multi-D Arrays
    ↓
Callbacks → Promises → Async/Await
    ↓
OOPs → Inheritance → TypeScript → Interface → Enum → Generics → Access Modifiers
    ↓
Interview Tasks → SDET Exercises → Playwright
```

## Concept Quick-Reference

### JavaScript Data Types

```
Data Types
├── Primitive: String, Number, Boolean, Null, Undefined, BigInt, Symbol
└── Reference: Object, Array, Function
```

### Hoisting Behavior

```javascript
// BEFORE HOISTING
console.log(x);  // ReferenceError
var x = 10;

// AFTER HOISTING (how JS sees it)
var x;              // declaration hoisted, value = undefined
console.log(x);     // → undefined
var x = 10;
```

### Promise States

```
Pending → Fulfilled (then) | Rejected (catch) → Settled (finally)
```

### TypeScript Type System

```
any → unknown → Primitive → Union/Intersection → Array → Interface → Class
```

## Chapter Reference

| Chapters | Topic | Difficulty |
|----------|-------|------------|
| 01-07 | Fundamentals | Beginner |
| 08-12 | Data Structures | Intermediate |
| 13-15 | Async Programming | Advanced |
| 16-17 | OOP & Inheritance | Intermediate |
| 18-22 | TypeScript | Intermediate-Advanced |

## Thematic Organization

**Fundamentals (Ch 1-7):** Environment, variables, operators, control flow, loops

**Data Structures (Ch 8-12):** Arrays, functions, strings, objects, multi-dimensional arrays

**Async Programming (Ch 13-15):** Callbacks, promises, async/await

**OOP & Patterns (Ch 16-17):** Classes, inheritance, encapsulation

**TypeScript (Ch 18-22):** Types, interfaces, enums, generics, access modifiers

**Practice (Ch 23+):** Interview questions, SDET exercises, Playwright

## Key Concepts

```
╔═══════════════════════════════════════════════════════════════╗
║  ⚠️ IMPORTANT: Arrow functions don't have their own 'this'     ║
║  ⚠️ var hoisted as undefined, let/const in Temporal Dead Zone ║
║  ⚠️ Promises: .then/.catch/.finally chain                     ║
║  ⚠️ Closures: function remembers outer variables              ║
╚═══════════════════════════════════════════════════════════════╝
```

## Getting Started

```bash
# Install dependencies
npm install

# Run a JS example
node chapter_01_Basics/01_basic.js

# Compile TypeScript
npx tsc

# Run Playwright tests (optional)
npm install -D @playwright/test
npx playwright install
```

## Chapter Summaries

| Chapter | Summary |
|---------|---------|
| 01_Basics | Environment setup, hello world, JS execution |
| 02_Java_Concepts | var/let/const, hoisting, scope, TDZ |
| 03_Iden_Lit_Op | typeof, == vs ===, null vs undefined |
| 04_Operators | Arithmetic, logical, ternary, type operators |
| 05_Statements | if/else, nested conditions, real-world examples |
| 06_Switch | switch, case, default, fall-through |
| 07_Loops | for, while, do-while, increment/decrement |
| 08_Arrays | Creation, map, filter, reduce, sort, destructure |
| 09_Functions | Arrow fn, closures, HOF, callbacks, IIFE |
| 10_Strings | slice, trim, replace, split, template literals |
| 11_Objects | Properties, descriptors, spread, getters/setters |
| 12_MD_Arrays | 2D/3D arrays, patterns, pyramid exercises |
| 13_Callbacks | Sync/async callbacks, callback hell, pyramid of doom |
| 14_Promises | Creation, states, Promise.all/race, error handling |
| 15_Async_Await | Sequential/parallel execution, try/catch, retry |
| 16_OOps | Classes, modules, encapsulation, static members |
| 17_Inheritance | Single, multi-level, hierarchical, multiple |
| 18_Typescript | Types, interfaces, classes, type safety |
| 19_TS_Interface | Interface inheritance, implements |
| 20_TS_Enum | const enum, string/numeric enum |
| 21_TS_Generics | Generic functions, interfaces, classes |
| 22_TS_Access | private, protected, public, readonly |
| Task_Interview_Coding | Array, loop, function coding challenges |
| Test_JS_Part2 | SDET-style coding and test logic exercises |
| Test_Playwright_Part3 | Advanced Playwright exercises with browser planning |

## Prerequisites

- Node.js 18+ recommended
- TypeScript (`npm install -g typescript`)

## Notes

- Files are learning snippets and intentionally concise
- Can be converted into Playwright tests or reorganized into a test suite
- `package-lock.json` locks dependency versions for reproducible installs
