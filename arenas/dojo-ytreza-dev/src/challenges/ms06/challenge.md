# Mine ou pas mine ?

Tu croises le regard de Julius, tu sens qu'il s'amuse.

> Tu n'as donc pas explosé sur la mine, mais c'était simple, car tu savais qu'il y en avait forcément une. Maintenant, il peut y avoir une mine comme ne pas en avoir. Survivras-tu à cette nouvelle épreuve ?

Les tests que tu dois faire passer sont les suivants :

```typescript
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
```

Pour passer cette épreuve, tu dois commencer par faire un copier-coller du code de l'épreuve précédente et apporter la modification minimale qui te permettra de faire passer les tests. 
