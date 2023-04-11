# Your First Minefield

Before you stands your first minefield. Julius gestures for you to move forward and cross it.

Fear not. You can proceed confidently because, in fact, this minefield is empty.

You start to move forward, ready to cross the minefield when suddenly, Julius raises his hand and speaks up.

> From now on, you will do everything I ask. How you do it matters little to me, as long as you meet my demands. But stay simple; otherwise, you will fail...

## What you need to do

In general, a minefield contains cells with a mine or cells without a mine. But this one contains neither, so it can be considered empty.

The test you need to pass is as follows:

```ts
describe("minesweeper", () => {
  it("should solve empty field", () => {
      const solved_field = minesweeper("")

      expect(solved_field).toEqual("")
  })
})
```

To do so, you are required to export your very own `minesweeper` function from your `index.ts` file, like this:

```ts
type Minesweeper = (minefield: string) => string;

// index.ts
export const minesweeper: Minesweeper = (minefield) => {
    /* your logic goes here */
    
    return 'your wonderful solution';
}
```

Keep that in mind, since you will have to add logic to this function in the upcoming challenges!

In this chapter of your adventure, a negative response (let's call it RED) is not a big deal and brings you no penalty. Just write the code that will allow you to fix this error. Once that's done, you'll have to perform a smart commit again. It may fail (RED), or maybe Julius will validate your passage (GREEN).

But remember, if you want to satisfy Julius, you must keep it simple.