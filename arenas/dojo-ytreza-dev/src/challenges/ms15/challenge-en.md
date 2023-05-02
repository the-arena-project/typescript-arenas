# And both at the same time?

Julius smiles:

> And both at the same time?

```typescript
describe('minesweeper', () => {
    describe("should sum mine on the left and the right", () => {
        it("should count mine on the left", () => {
            const solved_field = minesweeper("*.*")
            expect(solved_field).toEqual("*2*")
        })    
    })    
});
```
There is only one test. You must write the minimal code to pass it. If you have prepared your code well in the previous challenges, there is only few characters to change.