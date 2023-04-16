import { minesweeper } from '..';

describe('minesweeper', () => {
    it('should solve empty field', () => {
        const solved_field = minesweeper('');
        expect(solved_field).toEqual('');
    });

    it('should solve one empty cell', () => {
        const solved_field = minesweeper('.');
        expect(solved_field).toEqual('0');
    });

    it('should solve one mined cell', () => {
        const solved_field = minesweeper('*');
        expect(solved_field).toEqual('*');
    });

    describe('should solve cells in a row', () => {
        it('should solve two empty cells', () => {
            const solved_field = minesweeper('..');
            expect(solved_field).toEqual('00');
        });

        it('should solve two mined cells', () => {
            const solved_field = minesweeper('**');
            expect(solved_field).toEqual('**');
        });

        it('should solve three empty cells', () => {
            const solved_field = minesweeper('...');
            expect(solved_field).toEqual('000');
        });

        it('should solve three mined cells', () => {
            const solved_field = minesweeper('***');
            expect(solved_field).toEqual('***');
        });
    });
});
