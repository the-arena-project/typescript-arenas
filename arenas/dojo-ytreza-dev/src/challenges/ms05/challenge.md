# Attention à la mine

Tu viens de franchir l'épreuve précédente. Le sourire de Julius s'efface. Il t'applaudit doucement puis tu vois apparaître un rictus sur son visage.

> Merveilleux ! J'espère pour toi que tu as fait le bon choix. Nous verrons cela plus tard... Mais pour le moment, fais attention à toi, les choses sérieuses commencent dès maintenant. Au moindre faux pas que tu feras, ce sera la fin pour toi.

Cette fois, Julius te confronte à un champ de mines qui peut contenir une mine.

> Une seule mine peut suffire à causer la destruction d'une armée. Fais preuve de prudence et de précision.

Les tests que tu dois faire passer sont les suivants :

```typescript
describe("minesweeper", () => {
    it("should solve empty field", () => {
        const solved_field = minesweeper("")
        expect(solved_field).toEqual("")
    })

    it("should solve one mined cell", () => {
        const solved_field = minesweeper("*")
        expect(solved_field).toEqual("*")
    })
})
```

Pour passer cette épreuve, tu dois commencer par faire un copier-coller du code de l'épreuve précédente puis apporter la plus petite modification possible pour faire passer le test.

Julius s'adresse de nouveau à toi. 

> Un tout petit changement peut faire la différence. Seras-tu capable de le repérer ?