# À gauche!

Julius continue :

> Attention à ta gauche !

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

Il n'y a qu'un seul test. Tu dois écrire le code minimal pour le réussir. Si tu as bien préparé ton code dans les défis précédents, il n'y a qu'un seul caractère à changer.