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

    describe("should count mine on the right", () => {
        it("should count mine on the right", () => {
            const solved_field = minesweeper(".*")
            expect(solved_field).toEqual("1*")
        })    

        it("your other right !", () => {
            expect(minesweeper("..*")).toEqual("01*")
            expect(minesweeper("...*")).toEqual("001*")
            expect(minesweeper(".........................*")).toEqual("0000000000000000000000001*")
        })    
    })

    describe("should count mine on the left", () => {
        it("should count mine on the left", () => {
            const solved_field = minesweeper("*.")
            expect(solved_field).toEqual("*1")
        })    

        it("your other left !", () => {
            expect(minesweeper("*..")).toEqual("*10")
            expect(minesweeper("*...")).toEqual("*100")
            expect(minesweeper("*.........................")).toEqual("*1000000000000000000000000")
        })    
    })    

    describe("should sum mine on the left and the right", () => {
        it("should count mine on the right and left", () => {
            const solved_field = minesweeper("*.*")
            expect(solved_field).toEqual("*2*")
        })    
    })    



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
    expect(minesweeper('*...*')).toEqual('*101*');
    expect(minesweeper('..*.*.*..')).toEqual('01*2*2*10');

})

