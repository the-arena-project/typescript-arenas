Write a function called unshift that takes the first link of a linked list as its first argument and adds a link in front of it.

The next value of the new link should point to begin.

The new link should be returned.

The new link should contain the value of data.

Your function should conform to the following prototype:

```typescript
type UnshiftFn = <T> (begin: Link<T>|null, data: T) => Link<T>
```
