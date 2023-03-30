Write a program lsdeep that works like your previous ls program but in a recursive manner. You can compare this behavior to that of the real ls -R program, all proportions kept.

For the following directory structure:

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

Please note that the XX fields will indeed be replaced by a number.

Aside from the fact that your lsdeep also lists subdirectories, its operation remains strictly the same as that of your previous ls.

You must therefore pay attention to the same details.
