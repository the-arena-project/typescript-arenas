import { minesweeper } from '..';

describe('minesweeper', () => {
    it('should solve one empty cell', () => {
        const solved_field = minesweeper('.');
        expect(solved_field).toEqual('0');
    });
});
