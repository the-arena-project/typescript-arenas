# Bienvenue dans le minesweeper challenge

Les portes de l'arène s'ouvre. Tu entres dans l'enceinte et tu regardes tout autour de toi. La foule est présente, tous les yeux sont braqués sur toi et assis sur son trône, Julius, qui te regarde d'un air autoritaire.

> "Bienvenue à toi, tu es là pour me divertir ! Quelle épreuve vais-je t'infliger ? Aucune chance que tu ne t'en échappes, mais je demande jusqu'où tu vas aller."

> Oui, je sais ! Que l'on prépare le minesweeper challenge !

## Principe du kata
Tu vas participer au minesweeper challenge. Cet exercice est inspiré du kata du même nom. L'objectif est de créer une fonction qui permet de résoudre une grille de mine et d'indiquer le nombre de mines qu'il y a autour de chaque case.

## Objectif pédagogique
L'objectif est de créer cette fonction en suivant les principes du Test Driven Developpment (TDD) basé sur le cycle Red Green Refactoring.

Le rôle de Julius est de te proposer les tests à faire passer qui vont te guider dans le développement.

## Pour démarrer : 
Tout au long des challenges, tu vas devoir implémenter la fonction `minesweeper` qui reçoit en entrée une chaîne de caractères contenant le champ de mines (sous forme de rectangle). Elle retourne une chaîne de caractères contenant le champ de mines résolus.

Par exemple, si tu as en entrée  : 
```
*...
....
.*..
....
```

tu auras en sortie : 
```
*100
2210
1*10
1110
```

## Est-ce que tu as bien compris ?

Julius a envie de voir que tu as bien compris ce qu'il attend de toi. Pour cela, tu dois lui donner une preuve de ta compréhension.

Voici trois questions : 

Quel résultat est attendu lorsque le champ de mine est vide (`""`) ?
Tu dois répondre à cela en fournissant une variable que tu exportes `empty_field`.

Quel résultat est attendu pour le champ de mine : `"..*.."` ? Tu l'exporteras dans une variable `field_of_single_line`

Et enfin, quel résultat pour le champ de mine : `"...*..\n..*...\n.**..."` ?
Tu l'exporteras dans une variable `complex_field`.

Une fois que Julius sera sûr que tu as bien compris, tu pourras réellement commencer l'épreuve.