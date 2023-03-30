**Warning:** in this exercise, the native type conversion of Typescript is strictly forbidden. Thus, you are not allowed to do things like:

```typescript
+"1"    // FORBIDDEN
"1" * 1 // FORBIDDEN
"1" % 1 // FORBIDDEN
```
Write a function atoi that converts the string representation of a number into its numeric equivalent, as the parseInt function does (which is, as a reminder, FORBIDDEN).

The representation passed as an argument will be that of an integer in base 10.

The representation may be preceded by one and only one sign, denoted by the + or - character.

The represented number can be preceded by an arbitrary number of zeros: 000000000034 is a valid representation, in base 10, of 34.

Thus, 135, -135, and +000135 are examples of valid representations that you must be able to handle.

On the other hand, -+-1213 or AF2 are two examples of invalid representations. In this case, your function should return NaN.

Your function should conform to the following prototype:

```typescript
type AtoiFn = (str: string) => number
```
