Écrire une fonction appelée `createLink` qui crée et retourne un nouveau maillon de type `Link`.

La valeur de `data` devra être assignée au maillon.

La valeur de la propriété `next` du maillon sera `null`.

Votre fonction devra se conformer au prototype suivant :

```typescript
type Link<T> = {
	data: T,
	next: Link<T> | null
}

type CreateLinkFn = <T> (data: T) => Link<T>
```