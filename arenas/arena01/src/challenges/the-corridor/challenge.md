Guerrier, pour te préparer au combat, tu dois rejoindre le Dojo de l'Arène.

Celui-ci se trouve au bout d'un des couloirs les plus redoutés de l'Arène.

Beaucoup sont devenus fou en essayant de le traverser.

Mais la récursivité va t'y aider.

Dans ce couloir, schématisé par un tableau à une dimension, tu pourras te déplacer de la gauche vers la droite, de case en case.

Chaque case est représentée par un nombre.

Une case contenant un 0 t'indique que tu peux avancer à la case suivante.

Mais certaines cases contiendront un nombre supérieur à 0, qui signifie la présence d'une porte.

Cette porte magique t'emmènera à l'index indiqué par le nombre.

Puis, tu pourras continuer à avancer dans le couloir.

Arrivé à la fin du couloir (au dernier index), tu auras presque réussi.

Mais attention, tu ne peux pas sortir du couloir sans donner le mot de passe au gardien.

Le mot de passe est le nombre de cases que tu as parcourues.

Écris une fonction appelée `exitTheCorridor` qui prend un couloir en argument et retourne le nombre de cases parcourues avant la sortie.

Une porte n'est pas comptée comme une case parcourue.

Nous te garantissons également qu'aucun nombre négatif ne sera présent dans ce couloir.

Une porte donnera toujours accès à un index valide.

```typescript
type Corridor = number[];

type ExitTheCorridorFn = (corridor: Corridor) => number;
```

Voici quelques exemples de couloirs valides ainsi que les retours attendus par ta fonction :

```typescript
[0, 0, 0, 0] // 4
[0] // 1
[] // 0
[0, 0, 4, 0, 0]; // 3
[0, 0, 10, 0, 0, 0, 8, 0, 0, 12, 0, 5, 0] // 6
```
