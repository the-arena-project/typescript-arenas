# Mine or No Mine?

You catch Julius' gaze, and you can tell he's enjoying himself.

> So you didn't blow up on the mine, but that was easy because you knew there had to be one. Now, there might be a mine, or there might not be. Will you survive this new challenge?

The tests you need to pass are as follows:

```typescript
describe('minesweeper', () => {
    it("should solve empty field", () => {
        const solved_field = minesweeper("")
        expect(solved_field).toEqual("")
    })

    it("should solve one empty cell", () => {
        const solved_field = minesweeper(".")
        expect(solved_field).toEqual("0")
    })

    it("should solve one mined cell", () => {
        const solved_field = minesweeper("*")
        expect(solved_field).toEqual("*")
    })
})
```

To pass this challenge, you should start by copying and pasting the code from the previous challenge and make the minimal modification that will allow you to pass the tests.
