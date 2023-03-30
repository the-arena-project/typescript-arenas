Écrire une fonction `itoji` qui convertit un nombre en sa représentation dans la base octale suivante : `👍🐕🥹💕🎁😊🏡✨`.

Oui, ceci est une base comme une autre.

Même contraintes que les exercices précédents, **seule la base change**.

Votre fonction doit se conformer au prototype suivant :

```typescript
type ItojiFn = (nb: number) => string
```

Et voici quelques exemples d'invocation :

```typescript
itoji(0)    // '👍'
itoji(-0)   // '-👍'
itoji(111)  // '🐕😊✨'
itoji(-10)  // '-🐕🥹'
```