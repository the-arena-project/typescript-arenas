# Attention à droite !

Julius reprend la parole :

> Impressionnant ! Tu viens de franchir le premier pallier de cette arène. Les choses vont se compliquer. Sais-tu distinguer ta gauche de ta droite ? Car je te préviens, la prochaine mine sera à droite !

Le test que tu dois faire passer est le suivant : 

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

Il n'y a qu'un seul test. Tu dois écrire le code minimal pour le faire passer. Si tu as bien préparé ton code dans les épreuves précédentes, il n'y a qu'un seul caractère à changer.
