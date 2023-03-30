Write a function called rotateLeft that performs a left rotation of the node and returns the new root.

It is worth noting that rotation functions are sometimes given different names. To simplify, here's a representation of the imbalance case that it should resolve:

![](https://i.imgur.com/SZlcfsE.png)

Your function should conform to the following prototype:

```typescript
type RotateFn = (root: BNode) => BNode
```
