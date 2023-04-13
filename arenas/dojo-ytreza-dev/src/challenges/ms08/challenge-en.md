# Do it once, do it many times !

Julius is starting to appreciate your feats. He addresses you:

> It's time for you to have a new weapon. You now have access to the while loop!

The door opens and you are handed your new weapon.

Julius continues:

> If you were already using it, that means you cheated... And cheaters better start over from the beginning of the arena!

The soldiers point their spears at you. If you did indeed use the while loop before this challenge, you have to start over from the beginning. If not, you can continue.

The tests you need to pass are as follows, with one new test added:

```ts
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

        it("should solve three empty cells", () => {
            const solved_field = minesweeper("...")
            expect(solved_field).toEqual("000")
        })

        it('should solve three mined cells', () => {
            const solved_field = minesweeper('***');
            expect(solved_field).toEqual('***');
        });        
    });
});
```

To pass this challenge, you should start by copying and pasting the code from the previous challenge and make the minimal modification that will allow you to pass the tests. If your code is well prepared, you should only use `while` and remove code. If not, prepare your code before the change !