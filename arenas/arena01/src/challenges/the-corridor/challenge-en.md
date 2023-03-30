Warrior, to prepare for battle, you must join the Arena's Dojo.

It is located at the end of one of the most dreaded corridors in the Arena.

Many have gone mad trying to cross it.

But recursion will help you.

In this corridor, schematized by a one-dimensional array, you can move from left to right, from box to box.

Each box is represented by a number.

A box containing a 0 indicates that you can move to the next box.

But some boxes will contain a number greater than 0, which indicates the presence of a door.

This magic door will take you to the index indicated by the number.

Then, you can continue to move forward in the corridor.

Once you reach the end of the corridor (at the last index), you will have almost succeeded.

But be careful, you cannot leave the corridor without giving the password to the guard.

The password is the number of boxes you have traversed.

Write a function called exitTheCorridor that takes a corridor as an argument and returns the number of boxes traversed before exiting.

A door is not counted as a box traversed.

We also guarantee that no negative numbers will be present in this corridor.

A door will always give access to a valid index.

```typescript
type Corridor = number[];

type ExitTheCorridorFn = (corridor: Corridor) => number;
```

Here is the function prototype you should use:

```typescript
[0, 0, 0, 0] // 4
[0] // 1
[] // 0
[0, 0, 4, 0, 0]; // 3
[0, 0, 10, 0, 0, 0, 8, 0, 0, 12, 0, 5, 0] // 6
```
