Write a function called printTree that displays all the nodes of a tree on the standard output.

Each link between nodes will contain a vertically aligned pipe `|` followed by three underscores `___`.

No space is required between a node's value and its link.

The function should always display the right node first, then all the children of the right node, and then move on to the left nodes.

Your function should conform to the following prototype:

```
type PrintTreeFn = (root: BNode | null) => void
```

Here is an example of output for a balanced tree with a root value of 4.

```
4
|___6
|   |___9
|   |   |___10
|   |   |___7
|   |___5
|___2
|   |___3
|   |___1
```
