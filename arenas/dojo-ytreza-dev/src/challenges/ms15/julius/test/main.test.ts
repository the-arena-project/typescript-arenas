import { minesweeper } from '..';

describe('minesweeper', () => {
    describe("should sum mine on the left and the right", () => {
        it("should count mine on the left", () => {
            const solved_field = minesweeper("*.*")
            expect(solved_field).toEqual("*2*")
        })    
    })    
});