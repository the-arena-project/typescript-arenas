Écrire un programme `cp` qui copie un fichier source vers une destination sur le système de fichier.

Votre programme sera invoqué comme suit :

```bash
$> node cp.js /path/to/src/file /path/to/dst/file
$>
```

Si votre programme est appelé avec le mauvais nombre d'arguments, il doit quitter et retourner un code d'erreur `1`.

Si le chemin vers la source ou la destination est invalide, votre programme doit quitter et retourner un code d'erreur `1`.

Si la destination est un dossier, le fichier source doit être copié dans un fichier du même nom dans le dossier de destination.

Votre programme doit être capable de copier des fichiers de plusieurs dizaines de gigabytes si nécessaire. À vous de voir ce que cela implique...

Vous pouvez afficher ce que vous voulez sur la sortie standard ou d'erreur.

La sortie de votre programme ne sera pas testée.

Voici quelques exemples de cas d'utilisation de votre programme :

```bash
$> node cp.js do_not_exist.txt destination; echo $?
1

$> node cp.js || echo 'encountered some kind of error'
encountered some kind of error

$> node cp.js src.txt dst.txt
$> cmp src.txt dst.txt && echo 'copy was successful'
copy was successful

$> node cp.js src2.txt folder
$> cmp src2.txt folder/src2.txt && echo 'copy was successful'
copy was successful
```