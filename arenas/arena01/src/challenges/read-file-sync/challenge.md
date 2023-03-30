Écrire une fonction `readFileSync` qui lit le fichier dont le chemin est passé en paramètre.

La fonction doit renvoyer une chaîne de caractères contenant le contenu du fichier lu, encodé en utf-8.

La fonction ne sera jamais appelée avec un chemin invalide dans nos tests.

Votre fonction doit se conformer au prototype suivant :

```typescript
type ReadFileSyncFn = (path: string) => string
```