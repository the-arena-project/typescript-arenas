# Deux épreuves à la fois

Tu progresses petit à petit dans l'arène. Peut-être as-tu trouvé les épreuves précédentes trop facile ? Julius s'en rend compte et te dit avec un sourire féroce.

> Bravo, tu as su triomphé de mes deux champs de mines, mais sauras-tu en gérer deux d'un coup ?

```typescript
    it("should solve empty field", () => {
        const solved_field = minesweeper("")
        expect(solved_field).toEqual("")
    })
    
    it("should solve one empty cell", () => {
        const solved_field = minesweeper(".")
        expect(solved_field).toEqual("0")
    })
```

Julius poursuit : 

> Cela peut sembler facile, mais beaucoup sont tombés sous cette épreuve. La complexité les as perdus.

Dans cette épreuve, tu vas continuer à utiliser le code précédent. Mais tu as un choix à faire, du code de quelle épreuve repartiras-tu ? 

Julius reprend : 

> Sauras-tu faire le bon choix ?

Rappelle-toi de demander à Julius ce qu'il attend de toi. Si tu reçois une réponse négative (RED), corrige ton code et effectue un nouveau smart commit. Si tu reçois une réponse positive (GREEN), félicitations ! Tu peux passer à l'épreuve suivante.

N'oublie pas que la simplicité est de rigueur si tu souhaites survivre dans cette arène.