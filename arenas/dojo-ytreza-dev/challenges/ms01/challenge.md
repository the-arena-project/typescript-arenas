# Bienvenue dans le minesweeper challenge

TODO : revoir tout le texte

## Description du kata
Nous allons jouer au démineur (minesweeper en anglais). L'idée de ce kata est de proposer une application qui permette d'indiquer la position des mines et calculer le nombre de mines adjacentes aux cases vides.

## Pour démarrer : 

### Piste de départ
Nous allons faire une fonction `minesweeper` qui reçoit en entrée une chaîne de caractères contenant le champ de mines (sous forme de rectangle). Elle retourne une chaîne de caractères contenant le champ de mines résolus.

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

Une fois que Julius sera sûr que tu as bien compris, tu pourras commencer le combat.





