Write a function called createLink that creates and returns a new node of type Link.

The value of data must be assigned to the node.

The value of the next property of the node will be null.

Your function must conform to the following prototype:

```typescript
type Link<T> = {
	data: T,
	next: Link<T> | null
}

type CreateLinkFn = <T> (data: T) => Link<T>
```
