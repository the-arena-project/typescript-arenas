Écrire une fonction appelée `writeFileSync` qui écrit le contenu d'un `Buffer` dans un fichier sur le disque.

La fonction prendra en paramètre un chemin vers le fichier de destination ainsi que le contenu à écrire, stocké dans un `Buffer`.

Si le fichier de destination n'existe pas, il sera créé.

Si le fichier de destination existe, son contenu sera entièrement remplacé par le nouveau.

La fonction ne sera jamais appelée avec un chemin invalide dans nos tests.

Votre fonction doit se conformer au prototype suivant :

```typescript
type WriteFileSyncFn = (path: string, buffer: Buffer) => number
```