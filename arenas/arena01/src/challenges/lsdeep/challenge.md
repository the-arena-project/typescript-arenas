Écrire un programme `lsdeep` qui fonctionne comme votre précédent programme `ls` mais de manière récursive. Vous pouvez comparer ce comportement à celui du vrai programme `ls -R`, toutes proportions gardées.

Pour l'arborescence suivante :

```
├── empty-directory
├── full-directory
│   ├── full-directory2
│   │   └── nom-du-fichier5.txt
│   └── nom-du-fichier4.txt
├── nom-du-fichier.txt
├── nom-du-fichier2.txt
└── nom-du-fichier3.txt
```

```bash
$> node lsdeep.js .
.:
total XX
Directory  empty-directory
Directory  full-directory
File       nom-du-fichier.txt
File       nom-du-fichier2.txt
File       nom-du-fichier3.txt

empty-directory:
total XX

full-directory:
total XX
Directory  full-directory2
File       nom-du-fichier4.txt

full-directory/full-directory2:
total XX
File       nom-du-fichier5.txt
$>
```

A noter que les champs `XX` seront effectivement remplacés par un nombre.

Hormis le fait que votre `lsdeep` liste également les sous-dossiers, le fonctionnement reste strictement le même que celui de votre précédent `ls`.

Vous devez donc porter attention aux mêmes détails.