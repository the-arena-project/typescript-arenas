Warrior, you are almost at your goal, the door you seek is hidden at the end of this courtyard.

However, you are in a delicate situation.

In front of you are bloodthirsty warriors.

Confronting them would cost you your life.

You must run as fast as possible and avoid them one by one.

I offer you a simple and effective method.

Always move straight ahead.

As soon as you encounter a warrior, take a side step to dodge them and resume your run.

To succeed, you will use recursion.

You can represent your path as a map seen from above, stored in a two-dimensional array.

Here is an example of a path, which is read from bottom to top.

```typescript
type Runway = [number, number][];
```

```typescript
const runway = [
    [0, 0],
    [0, 1],
    [0, 0],
    [1, 0],
    [1, 0],
    [0, 0],
]
```

In this scenario, warriors are represented by 1s.
Safe spaces are represented by 0s.

Write a function called avoidTheWarriors that takes a runway as an argument and returns the number of steps sideways you had to take to avoid the warriors.

If you are never forced to take a step sideways, return 0.

Write a function called `avoidTheWarriors` that takes a runway as an argument and returns the number of steps sideways you had to take to avoid the warriors.

If you are never forced to take a step sideways, return 0.

```typescript
type AvoidTheWarriorsFn = (runway: Runway) => number;
```

The beginning of the runway is always located at the bottom left.

The runway always ends at the top left.

The beginning and end of the runway are always safe zones.

The runway will always be valid.

Here are some examples of runways as well as the expected outputs of your function:

```typescript
[
    [0, 0],
    [0, 0],
    [0, 0],
] // 0

[
    [0, 0],
    [0, 1],
    [0, 0],
] // 0

[
    [0, 0],
    [0, 1],
    [0, 0],
    [1, 0],
    [1, 0],
    [0, 0],
] // 2
```

Good luck warrior!
