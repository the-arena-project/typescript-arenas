# Watch out for the left!

Julius continues:

> Watch out for the left!

```typescript
describe('minesweeper', () => {
    describe("should count mine on the left", () => {
        it("should count mine on the left", () => {
            const solved_field = minesweeper("*.")
            expect(solved_field).toEqual("*1")
        })    
    })
});
```

There is only one test. You must write the minimal code to pass it. If you have prepared your code well in the previous challenges, there is only one character to change.