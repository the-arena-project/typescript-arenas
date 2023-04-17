import { minesweeper } from '..';

describe('minesweeper', () => {
    describe("should count mine on the right", () => {
        it("should count mine on the right", () => {
            const solved_field = minesweeper(".*")
            expect(solved_field).toEqual("1*")
        })    
    })
});