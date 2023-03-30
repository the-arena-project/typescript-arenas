Écrire un programme appelé `ls` qui reproduit une variante simplifiée de la commande `ls -l`.

Le programme prendra en argument un chemin vers un dossier.

Aucune option n'est à gérer.

Si le chemin passé en argument ne pointe pas sur un dossier valide, le programme devra quitter avec un code d'erreur 1, après avoir affiché le message suivant sur la sortie d'erreur :

```
Error "./not-a-valid-path" is not a valid directory
```

Lorsqu'il s'agit d'un dossier valide, votre programme doit lister les fichiers et les dossiers comme suit :

```bash
$> node ls.js .
total 435
Directory  empty-directory
File       nom-du-fichier.txt
File       nom-du-fichier2.txt
File       nom-du-fichier3.txt
```

Si le dossier ne contient que des fichiers, l'espacement sera le même :

```bash
$> node ls.js /some/path
total 435
File       nom-du-fichier.txt
File       nom-du-fichier2.txt
File       nom-du-fichier3.txt
```

Si le contenu du dossier est vide, alors rien ne sera à afficher :

```bash
$> node ls.js ./empty-directory
$>
```

D'après ces exemples, plusieurs choses sont à noter :

- Le listage doit se faire dans l'ordre **lexicographique**.
- Vous devez uniquement gérer les fichiers et les dossiers. Nous ne listerons PAS de dossier contenant autre chose (liens symboliques, disques...)
- Chaque colonne doit être séparée de deux espaces comme dans l'exemple, vous devrez utiliser le padding nécessaire pour parvenir à vos fins.
- Votre programme doit reproduire exactement le même espacement que ci-dessus, dans le cas contraire Julius marquera l'exercice comme faux.
- Le champ `total` doit afficher la même donnée que le vrai `ls`.

Pour ce challenge vous avez accès à un tas de nouvelles propriétés et fonctions. Renseignez-vous à leur sujet et utilisez les à bon escient !