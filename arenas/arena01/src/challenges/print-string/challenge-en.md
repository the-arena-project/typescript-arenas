All courses start with a `console.log("Hello world!")`. 

In the Arena, we expect you to develop a deeper understanding than that.

So, your first challenge is to recode a `console.log()`. 

You can only use the method process.stdout.write(). 

To be clear: `console.log()` is forbidden. 

Write a function called printString that takes a string as a parameter and displays it on the standard output in the same way as `console.log()`.

Here is the type of the function you have to write:

```typescript
type PrintStringFn = (str: string) => void
```

To submit your work, clone the repository, add a directory named `print-string`, add your code in a file named `index.ts`, and export your function as follows:

```typescript
type PrintStringFn = (str: string) => void;

export const printString: PrintStringFn = (str) => {
   // your code here
};
```

Then, commit your work and push it to your repository.

Note: For every challenge, look carefully at the instructions, especially the submission directory and file names, the function name, and the allowed methods. 

If no function or method is allowed, it means it's forbidden by default.

Good luck!
