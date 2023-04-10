# Ton premier champ de mine

Devant toi se dresse ton premier champ de mine. Julius te fait signe pour que tu avances et que tu traverses.

N'aies crainte. Tu peux y aller sereinement, car en fait, ce champ de mine est vide. 

Tu commences à avancer, prêt à franchir ce champ de mine, lorsque soudainement, Julius lève la main et prend la parole.

> A partir de maintenant, tu feras tout ce que je te demanderai. Comment tu le fais m'importe peu, du moment que tu réponds à mes exigences. Mais reste simple, sinon, tu échoueras... 

## Ce que tu dois faire
En règle général, un champ de mine contient des cases avec une mine ou des cases sans mine. Mais celui-ci ne contient ni l'un, ni l'autre, on peut donc considérer qu'il est vide.

Le test que tu dois faire passer est le suivant :

```typescript
  it("should solve empty field", () => {
      const solved_field = minesweeper("")
      expect(solved_field).toEqual("")
  })
```

Tu dois apprendre à demander à Julius ce qu'il attend de toi. Et tu dois comprendre ce qu'il te communique. Pour communiquer avec Julius, tu dois effectuer un smart commit du challenge en cours et voir la réponse de Julius.

Dans ce chapitre de ton aventure, une réponse négative (appelons la RED) n'est pas grave et ne t'apporte aucune pénalité. Ecris seulement le code qui te permettra de corriger cette erreur. Une fois que cela est fait, tu devras de nouveau effectuer un smart commit. Il sera peut-être en échec (RED) ou peut-être que Julius te validera ton passage (GREEN).

Mais n'oublies pas, si tu souhaites satisfaire Julius, tu dois rester simple.