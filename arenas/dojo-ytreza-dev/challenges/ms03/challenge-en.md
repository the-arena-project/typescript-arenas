# One Empty Cell

You now face a new challenge. This time, Julius asks you to solve a minefield containing only one empty cell.

> Do not underestimate the difficulty of this task. Even though this challenge may seem simple, it is essential to master each step of our progression.

The test you need to pass is as follows:

```ts
describe("minesweeper", () => {
    it("should solve one empty cell", () => {
        const solved_field = minesweeper(".")

        expect(solved_field).toEqual("0")
    })
})
```

The minefield contains a single empty cell represented by a period "."
In this field, there are no mines. The expected output is "0", which means there are no adjacent mines to the empty cell.

To pass this challenge, you should start by copying and pasting the code from the previous challenge and then make the smallest possible modification to pass the test.

Remember to ask Julius what he expects from you. If you receive a negative response (RED), correct your code and perform a new smart commit. If you receive a positive response (GREEN), congratulations! You can move on to the next challenge.

Don't forget to keep it as simple as possible to satisfy Julius.