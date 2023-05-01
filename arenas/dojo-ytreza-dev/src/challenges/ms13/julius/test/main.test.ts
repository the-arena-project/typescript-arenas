import { minesweeper } from '..';

describe('minesweeper', () => {
    describe("should count mine on the left", () => {
        it("should count mine on the left", () => {
            const solved_field = minesweeper("*.")
            expect(solved_field).toEqual("*1")
        })    
    })
});