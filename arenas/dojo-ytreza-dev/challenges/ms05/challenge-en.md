# Watch Out for the Mine

You have just passed the previous challenge. Julius' smile fades. He applauds you softly, and then you see a grin appear on his face.

> Wonderful! I hope for your sake that you made the right choice. We will see about that later... But for now, be careful, the real challenge starts now. At the slightest misstep you make, it will be the end for you.

This time, Julius confronts you with a minefield that may contain a mine.

> A single mine can be enough to cause the destruction of an army. Exercise caution and precision.

The tests you need to pass are as follows:

```typescript
    it("should solve empty field", () => {
        const solved_field = minesweeper("")
        expect(solved_field).toEqual("")
    })

    it("should solve one mined cell", () => {
        const solved_field = minesweeper("*")
        expect(solved_field).toEqual("*")
    })
```

To pass this challenge, you should start by copying and pasting the code from the previous challenge and then make the smallest possible modification to pass the test.

Julius addresses you again.

> A tiny change can make all the difference. Will you be able to spot it?