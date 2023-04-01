La majorité des cours commencent avec un console.log("Hello world!").

Dans l'Arène, on s'attend à ce que tu développes une compréhension plus approfondie que cela.

Ton premier défi est donc de recoder un `console.log()`.

Tu peux seulement utiliser la méthode `process.stdout.write()`.

Pour être clair : `console.log()` est interdit. 

Écris une fonction appelée `printString` qui prend une chaîne de caractères en paramètre et l'affiche sur la sortie standard de la même manière que console.log().

Voici le type de fonction que tu dois écrire :

```typescript
type PrintStringFn = (str: string) => void
```

Pour soumettre ton travail, clone le repository, ajoute un dossier nommé `print-string`, ajoute ton code dans un fichier nommé `index.ts`, et exporte ta fonction comme suit :

```typescript
export const printString: PrintStringFn = (str: string) => {
   // ton code ici
};
```

Note : Pour chaque défi, lis attentivement les instructions, en particulier les noms de dossier et de fichier de rendu, le nom de la fonction et les méthodes autorisées. 

Si aucune fonction ou méthode n'est autorisée, cela signifie qu'elle est interdite par défaut.

Bonne chance !
