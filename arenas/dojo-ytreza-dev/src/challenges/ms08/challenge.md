# Do it once, do it many times !

Julius commence à apprécier tes exploits. Il s'adresse à toi :

> Il est temps que tu possèdes une nouvelle arme. Tu as désormais le droit à la boucle while !

La porte s'ouvre et on te remet ta nouvelle arme.

Julius reprend : 

> Si tu t'en servais déjà, cela signifie que tu as triché... Et les tricheurs feraient mieux de recommencer l'arène !

Les soldats pointent leurs lances vers toi. Si tu as effectivement utilisé la boucle while avant ce challenge, tu dois recommencer depuis le départ. Si ce n'est pas le cas, tu peux continuer.

The tests you need to pass are as follows, with one new test added:

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

    it("should solve three empty cells", () => {
        const solved_field = minesweeper("...")
        expect(solved_field).toEqual("000")
    })
  })
})
```

To pass this challenge, you should start by copying and pasting the code from the previous challenge and make the minimal modification that will allow you to pass the tests. It's possible that the minimal modification might not be easy to implement. The advice you received might be useful. It's up to you to make good use of it.
