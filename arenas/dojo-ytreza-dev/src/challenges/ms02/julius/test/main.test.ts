import { minesweeper } from "..";

describe("minesweeper", () => {
  it("should solve empty field", () => {
      const solved_field = minesweeper("")
      expect(solved_field).toEqual("")
  })
})
