# Attention à la mine

Cette fois, Julius te confronte à un champ de mines qui contient une seule case piégée.

> Une seule case peut suffire à causer la destruction d'une armée. Fais preuve de prudence et de précision.

Le test que tu dois faire passer est le suivant :

```typescript
    it("should solve one mined cell", () => {
        const solved_field = minesweeper("*")
        expect(solved_field).toEqual("*")
    })
```

Pour passer cette épreuve, tu dois commencer par faire un copier-coller du code de l'épreuve précédente puis apporter la plus petite modification possible pour faire passer le test.

Julius s'adresse de nouveau à toi. 

> Que viens-tu de mettre en évidence dans cette épreuve ? Sauras-tu le mettre en valeur dans les prochaines épreuves ?