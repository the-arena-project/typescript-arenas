Écrire une fonction appelée `isAlpha` qui retourne `true` si une chaîne de caractères est composée uniquement de lettres de l'alphabet (minuscules ou majuscules, accents **exclus**).

La fonction sera prototypée de la manière suivante :

```typescript
type IsAlphaFn = (str: string) => boolean
```

Exemples d'utilisation :

```typescript
isAlpha("BonjourJeSuisContent");
// true
isAlpha("Bonjour 123");
// false
isAlpha("Bonjour ");
// false
```