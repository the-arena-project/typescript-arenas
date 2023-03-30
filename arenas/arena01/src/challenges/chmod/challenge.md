Créer un script shell appelé `mode.sh` qui lorsqu'il est interprété, change les permissions des fichiers présents dans le répertoire où il s'exécute de manière que la commande `ls -l` affiche le résultat suivant (nous ne tiendrons pas compte des champs marqués X) :


```shell
$>ls -l
total XX
-rwxr-xr-x  1 XX  XX  X XX a
-rwxrwxrwx  1 XX  XX  X XX b
dr--------  2 XX  XX  X XX c
-r---w--w-  1 XX  XX  X XX d
-rwx-wx-wx  1 XX  XX  X XX e
$>
```


Attention : votre script ne doit pas créer de fichiers et vous ne devez rendre que le script. Nous vous garantissons que les fichiers nécessaires seront dans le répertoire courant où votre script s'exécutera lors de la correction.