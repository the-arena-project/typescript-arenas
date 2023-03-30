Write a function called push that adds a link to the end of a linked list passed as an argument and returns the created link.

If the list passed as an argument is null, the link will be created.

```typescript
type PushFn = <T> (list: Link<T>|null, data: T) => Link<T>
```
