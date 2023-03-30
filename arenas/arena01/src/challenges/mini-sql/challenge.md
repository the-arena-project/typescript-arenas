# Introduction

Cet ultime challenge consiste à coder une version simplifiée d'une base de données.

Plus précisément, il s'agit de créer un programme qui permet de persister des noms d'utilisateur sur le disque et de les rechercher par la suite.

Ces données seront toujours structurées de la même manière :

- Une colonne appelée `username` pouvant contenir une chaîne de caractères encodée en UTF-8, non unique et sans limite de taille.
- Une colonne appelée `id` qui permet d'identifier de manière unique un enregistrement de la base de données.

# Fonctionnement

Lorsqu'on démarre le programme, celui-ci doit attendre des instructions passées sur l'entrée standard et réagir en conséquence.

Un préfixe `miniSQL$ ` doit indiquer que le programme est en attente d'instruction, comme lorsqu'on ouvre un *shell*.

Voici un exemple de démarrage du programme :

```bash
$> npm run start
miniSQL$
```

La fin d'une instruction sera toujours marquée par un `\n`.

En **aucun cas** le programme ne devra quitter avec un code d'erreur `1`.

Il est donc possible de passer au programme de nombreuses instructions à la suite.

Voici un exemple :

```bash
$> npm run start
miniSQL$ INSERT julius1
added: id=1, username=julius1
miniSQL$ INSERT julius2
added: id=2, username=julius2
```

Le programme doit être en mesure de lire des instructions depuis un fichier qui fait office d'entrée standard via une redirection d'entrée, par exemple :

```bash
$> cat instructions | npm run start
INSERT julius1
INSERT julius2
INSERT julius3
$> npm run start < instructions
miniSQL$ added: id=1, username=julius1
added: id=2, username=julius2
added: id=3, username=julius3
```

Ou encore de la manière suivante, via un pipe.

```bash
$> echo -e "INSERT julius1\nINSERT julius2\n" | npm run start
miniSQL$ added: id=1, username=julius1
added: id=2, username=julius2
```

Les trois instructions suivantes sont à gérer :

- INSERT
- SELECT
- EXIT

En cas d'instruction inconnue, le programme devra retourner un message d'erreur comme suit et afficher son usage :

```bash
$> npm run start
miniSQL$ something weird
illegal instruction: something weird
usage: INSERT username
       SELECT [username]
       EXIT [code]
miniSQL$
```

Une instruction vide ne déclenchera pas de message d'erreur :

```bash
$> npm run start
miniSQL$
miniSQL$
miniSQL$
miniSQL$
miniSQL$
```

La commande `INSERT` permet d'ajouter un `username` qui sera stocké sur le disque.

Le `username` pourra être composé de n'importe quel caractère utf-8.

Un `username` n'est pas forcément unique. Si plusieurs username sont identiques, ils auront nécessairement des `id` différents.

Le `username` sera toujours ajouté avec un `id` qui est un entier positif, auto-incrémenté par le programme lui-même.

Une fois l'entrée ajoutée un message de confirmation est affiché à l'utilisateur, voici un exemple :

```bash
$> npm run start
miniSQL$ INSERT julius
added: id=1, username=julius
miniSQL$ INSERT julius
added: id=2, username=julius
miniSQL$ INSERT "wise julius"
added: id=3, username=wise julius
```

La commande `SELECT` prend en argument optionnel un `username` et retourne toutes les entrées correspondantes qui sont stockées sur le disque en affichant le nombre de résultats disponibles, comme dans l'exemple suivant :

```bash
$> npm run start
miniSQL$ SELECT julius
found 2 entries:
-> id=1, username=julius
-> id=5, username=julius
```

Si aucune entrée ne correspond à la requête de l'utilisateur, le message suivant devra s'afficher :

```bash
$> npm run start
miniSQL$ SELECT doesNotExist
found 0 entries:
miniSQL$
```

Si aucun argument n'est passé à `SELECT`, toutes les entrées devront être retournées.

```bash
$> npm run start
miniSQL$ SELECT
found 2 entries:
-> id=1, username=julius
-> id=2, username=julius2
miniSQL$
```

Un autre exemple dans le cas où la base serait vide :

```bash
$> npm run start
miniSQL$ SELECT
found 0 entries:
miniSQL$
```

La commande `EXIT` permet de quitter le programme avec un exit code fournit en argument ou 0 si celui-ci n'est pas indiqué.

```bash
$> npm run start
miniSQL$ EXIT 1
$> npm run start
miniSQL$ EXIT
```

Bien évidemment, puisqu'il s'agit d'une base de données persistée, l'ensemble des données ajoutées sont toujours accessibles via une commande `SELECT` après avoir quitté puis relancé le programme.

# Compilation du programme

Vous l'aurez remarqué: ce programme ne s'exécute pas comme d'habitude.

Pour ce programme, vous allez devoir rendre un fichier `package.json` qui contiendra au minimum les scripts suivants :

`build` : ce script devra compiler l'ensemble de vos fichiers typescript dans un dossier appelé `dist` à la racine de votre repository.
`start` : ce script démarrera votre programme compilé dans le dossier dist.

Voici un exemple d'utilisation de `build` et de `start` :

```bash
$> npm run build
# peu importe l'output de votre commande de build
$> npm run start
miniSQL$
```

Pour tester votre code, nous allons cloner votre dossier de rendu, installer l'ensemble des packages autorisés, puis injecter votre `package.json` afin de lancer un `build` puis démarrer votre programme avec votre script `start`.

# Contraintes de performance

Nous n'imposons aucune contrainte de performance.

Vous pouvez stocker l'ensemble de vos données dans un seul fichier qui sera lu par votre base de données à chaque SELECT.

Vous pourriez tout aussi bien séparer votre base de données en plusieurs fichiers organisés par nom, par taille ou tout autre critère de votre choix.

Vous pourriez aussi créer des fichiers responsables d'indexer vos données afin d'améliorer nettement les performances de recherche par username.

Ou encore vous lancer dans l'implémentation de `B-Trees`.

À ce stade c'est à vous de juger ce que vous êtes capable d'accomplir ainsi que le temps et l'énergie que vous souhaitez allouer à ce projet.

Vous pourrez utiliser autant de fichiers de stockage et ou d'indexation que souhaité tant qu'ils se sauvegardent quelque part à l'intérieur de votre dossier de rendu.

Vos fichiers de stockage et ou d'indexation peuvent avoir l'extension de votre choix, même si, il est vrai qu'une extension `.minisql` serait vraiment stylée !
