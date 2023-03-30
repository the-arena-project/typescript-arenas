Write a program called ls that reproduces a simplified variant of the ls -l command.

The program will take a path to a folder as an argument.

No options need to be handled.

If the path provided as an argument does not point to a valid folder, the program must exit with an error code 1, after displaying the following message on the error output:

```
Error "./not-a-valid-path" is not a valid directory
```

When it is a valid folder, your program should list the files and folders as follows:

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
