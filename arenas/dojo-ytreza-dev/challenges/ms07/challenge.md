# Une rangée de mines ?

Julius t'applaudit pour ton exploit puis se met à réfléchir silencieusement. Il se lève et dit : 

> Ce serait dommage que tu tombes maintenant, j'ai envie de m'amuser avec toi. Tu vas avoir besoin d'aide. C'est décidé, faîtes venir Spartacus !

Une grille s'ouvre et une personne s'approche de toi. Elle transpire l'expérience. Tu sais qu'elle est passée par les mêmes épreuves que toi et qu'elle va te révéler des informations de la plus haute importance.

> Ecoute moi, je n'ai que quelques instants à te consacrer. Tu dois apprendre à dissocier le quoi du comment. Est-ce que tu sais ce qu'est un champ de mines ? une rangée de cases ? Une rangée de mine ? Une simple case ? Une mine ? Si tu ne sais pas, tu dois l'apprendre. Et un autre conseil, tu vas apprendre des choses dans les prochains combats. Sache qu'elles te seront utiles dans les précédents. J'ai bien dit les "précédents".

La grille s'ouvre de nouveau et tu retrouves ta solitude habituelle. Les conseils *étranges* raisonnent dans ta tête, qu'est-ce que cela veut bien dire. Mais tu n'as pas le temps de respirer, car te voilà devant une rangée de case. 

Les tests que tu dois faire passer sont les suivants, il y en a deux de plus :

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

  it("should solve one mined cell", () => {
    const solved_field = minesweeper("*")
    expect(solved_field).toEqual("*")
  })

  describe("should solve cells in a row", () => {
    it("should solve two empty cells", () => {
      const solved_field = minesweeper("..")
      expect(solved_field).toEqual("00")
    })

    it("should solve two mined cells", () => {
        const solved_field = minesweeper("**")
        expect(solved_field).toEqual("**")
    })
  })
})  
```

Pour passer cette épreuve, tu dois commencer par faire un copier-coller du code de l'épreuve précédente et apporter la modification minimale qui te permettra de faire passer les tests. Il est possible que la modification minimale ne soit pas facile à mettre en place. Les conseils que tu as obtenus te seront peut-être utiles. À toi d'en faire bon usage.
