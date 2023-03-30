Write a function called writeFileSync that writes the content of a Buffer to a file on the disk.

The function will take as parameters a path to the destination file and the content to write, stored in a Buffer.

If the destination file does not exist, it will be created.

If the destination file exists, its content will be completely replaced by the new one.

The function will never be called with an invalid path in our tests.

Your function must conform to the following prototype:

```typescript
type WriteFileSyncFn = (path: string, buffer: Buffer) => number
```
