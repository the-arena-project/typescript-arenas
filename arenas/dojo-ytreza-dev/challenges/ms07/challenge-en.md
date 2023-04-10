# A Row of Mines?

Julius applauds your feat and then falls silent in thought. He stands up and says:

> It would be a shame if you fell now, I want to have fun with you. You're going to need help. It's decided, bring Spartacus!

A gate opens, and a person approaches you. They exude experience. You know they have gone through the same trials as you and will reveal crucial information.

> Listen, I only have a few moments to devote to you. You must learn to distinguish the what from the how. Do you know what a minefield is? A row of cells? A row of mines? A single cell? A mine? If you don't know, you need to learn. And another piece of advice, you will learn things in the upcoming battles. Know that they will be useful in the previous ones. I said the "previous" ones.

The gate opens again, and you find yourself alone as usual. The *strange* advice resonates in your head, what could it mean? But you don't have time to catch your breath, as you now face a row of cells.

The tests you need to pass are as follows, with two new tests added:

```ts
describe("minesweeper", () => {
  it("should solve empty field", () => {
    const solved_field = minesweeper("")
    expect(solved_field).toEqual("")
  })

  it("should solve one empty cell", () => {
    const solved_field = minesweeper(".")
    expect(solved_field).toEqual("0")
  })

  it("should solve one mined cell", () => {
    const solved_field = minesweeper("*")
    expect(solved_field).toEqual("*")
  })

  describe("should solve cells in a row", () => {
    it("should solve two empty cells", () => {
      const solved_field = minesweeper("..")
      expect(solved_field).toEqual("00")
    })

    it("should solve two mined cells", () => {
        const solved_field = minesweeper("**")
        expect(solved_field).toEqual("**")
    })
  })
})
```

To pass this challenge, you should start by copying and pasting the code from the previous challenge and make the minimal modification that will allow you to pass the tests. It's possible that the minimal modification might not be easy to implement. The advice you received might be useful. It's up to you to make good use of it.
