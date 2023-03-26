import { minesweeper } from "..";

describe("minesweeper", () => {
  it("should solve empty field", () => {
    const solved_field = minesweeper("")
    expect(solved_field).toEqual("")
  })

  it("should solve one empty cell", () => {
    const solved_field = minesweeper(".")
    expect(solved_field).toEqual("0")
  })
})
