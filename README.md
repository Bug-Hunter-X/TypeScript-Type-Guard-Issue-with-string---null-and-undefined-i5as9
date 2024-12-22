# TypeScript Type Guard and undefined Values

This repository demonstrates a subtle bug in TypeScript's type guards when dealing with optional values (`string | null`).  The `if (name)` check doesn't explicitly handle `undefined`, leading to a compiler error even though the logic seems sound.

The `bug.ts` file showcases the problem. The `bugSolution.ts` file provides a corrected version using stricter type checking.

## Bug Description:

The function `printName` accepts a string or null.  While it handles `null` correctly, it throws a compiler error when passed `undefined` because the type guard doesn't account for `undefined` being a possible value.

## Solution:

The solution involves explicitly checking for `undefined` in addition to `null` or using a more concise type check using the nullish coalescing operator.