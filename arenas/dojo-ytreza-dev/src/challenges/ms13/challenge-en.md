# Your Other Right!

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

Your code must pass on the first try, without any changes. If it's not the case, it's highly likely that you don't master your right. It would be wise to restart the arena.