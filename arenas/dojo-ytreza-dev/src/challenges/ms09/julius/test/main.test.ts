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

describe('it all ends here?', () => {
    expect(minesweeper('....')).toEqual('0000');
    expect(minesweeper('.....')).toEqual('00000');
    expect(minesweeper('......')).toEqual('000000');
    expect(minesweeper('.......')).toEqual('0000000');
    expect(minesweeper('..............................')).toEqual('000000000000000000000000000000');
    expect(minesweeper('****')).toEqual('****');
    expect(minesweeper('*****')).toEqual('*****');
    expect(minesweeper('******')).toEqual('******');
    expect(minesweeper('*******')).toEqual('*******');
    expect(minesweeper('******************************')).toEqual('******************************');    
})

