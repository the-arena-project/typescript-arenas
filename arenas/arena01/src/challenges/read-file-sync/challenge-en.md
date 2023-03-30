Write a function readFileSync that reads the file whose path is passed as a parameter.

The function must return a string containing the content of the read file, encoded in utf-8.

The function will never be called with an invalid path in our tests.

Your function must conform to the following prototype:

```typescript
type ReadFileSyncFn = (path: string) => string
```
