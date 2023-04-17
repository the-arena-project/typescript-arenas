# Attention to the right!

Julius speaks again:

> Impressive! You have just passed the first level of this arena. Things are going to get more complicated. Do you know how to distinguish your left from your right? Because I warn you, the next mine will be to the right!

The test you need to pass is the following:

```typescript
describe('minesweeper', () => {
    describe("should count mine on the right", () => {
        it("should count mine on the right", () => {
            const solved_field = minesweeper(".*")
            expect(solved_field).toEqual("1*")
        })    
    })
});
```

There is only one test. You must write the minimal code to pass it. If you have prepared your code well in the previous challenges, there is only one character to change.