Écrire une fonction appelée `rotateRight` qui opère une rotation du nœud vers la droite et qui retourne la nouvelle racine.

Il est à noter que les fonctions de rotation se voient parfois donner des noms différents. Pour simplifier, voici une représentation du cas de déséquilibre que celle-ci doit résoudre :

![](https://i.imgur.com/2F53BCZ.png)

Votre fonction devra se conformer au prototype suivant :

```typescript
type RotateFn = (root: BNode) => BNode
```