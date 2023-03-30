Guerrier, te voilà presque arrivé à ton objectif, la porte que tu recherches se cache au bout de cette cour.

Cependant, tu es dans une situation délicate.

En face de toi se trouvent des guerriers sanguinaires.

Les affronter te coûterait la vie.

Tu dois courir le plus vite possible et les éviter un par un.

Je te propose une méthode simple et efficace.

Déplace-toi toujours tout droit.

Dès que tu rencontres un guerrier, fais un pas de côté pour l'esquiver et reprend ta course.

Pour réussir tu utiliseras la récursivité.

Tu peux représenter ton parcours sous forme d'une carte vue du ciel, stockée dans un tableau à deux dimensions.

Voici un exemple de parcours, qui se lit de bas en haut.

```typescript
type Runway = [number, number][];
```

```typescript
const runway = [
    [0, 0],
    [0, 1],
    [0, 0],
    [1, 0],
    [1, 0],
    [0, 0],
]
```

Dans ce parcours, les guerriers sont représentés par des 1.
Les cases sécuritaires sont représentées par des 0.

Écris une fonction appelée `avoidTheWarriors` qui prend un parcours en argument et retourne le nombre de pas de côté que tu as dû faire pour éviter les guerriers.

Si tu n'es jamais obligé de faire de pas de côté, retourne 0.

```typescript
type AvoidTheWarriorsFn = (runway: Runway) => number;
```

Le début du parcours se situe toujours en bas à gauche.

Le parcours se termine toujours en haut à gauche.

Le début et la fin du parcours sont toujours des zones sécuritaires.

Le parcours sera toujours valide.

Voici quelques exemples de parcours ainsi que les retours attendus par ta fonction :

```typescript
[
    [0, 0],
    [0, 0],
    [0, 0],
] // 0

[
    [0, 0],
    [0, 1],
    [0, 0],
] // 0

[
    [0, 0],
    [0, 1],
    [0, 0],
    [1, 0],
    [1, 0],
    [0, 0],
] // 2
```

Bonne chance guerrier !
