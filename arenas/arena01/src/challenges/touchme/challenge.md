Créez un fichier `touchme.sh` qui doit créer une arborescence de fichiers dans le répertoire où il s'exécute tel que la commande ls -R affiche le résultat suivant (nous ne tiendrons pas compte des champs marqués `XX`):

```shell
$>sh touchme.sh && ls -R
man super touchme.sh

./man:
better is

./man/better:
batman than

./man/better/batman:
$>
```