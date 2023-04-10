# Two Challenges at Once

You are starting to make your way into the arena. Maybe you found the previous challenges too easy? Julius realizes this and tells you with a fierce smile:

> Congratulations, you have triumphed over my two minefields, but can you handle two at once?

```typescript
describe("minesweeper", () => {
    it("should solve empty field", () => {
        const solved_field = minesweeper("")

        expect(solved_field).toEqual("")
    })
    
    it("should solve one empty cell", () => {
        const solved_field = minesweeper(".")

        expect(solved_field).toEqual("0")
    })
})
```

Julius continues:

> This may seem easy, but many have fallen under this challenge. Complexity has lost them.

In this challenge, you will continue to use the previous code. But you have a choice to make, from which challenge's code will you start?

Julius goes on:

> Will you make the right choice?

Remember to ask Julius what he expects from you. If you receive a negative response (RED), correct your code and perform a new smart commit. If you receive a positive response (GREEN), congratulations! You can move on to the next challenge.

Don't forget that simplicity is crucial if you want to survive in this arena.
