import { unlinkSync, writeFileSync } from 'fs';
import { readFileSync } from '../index';

const TIMEOUT = 1000 * 10;

describe('readFileSync', () => {
    it(
        'should read a file that does NOT end with a newline',
        () => {
            const filename = 'no-ending-newline.txt';
            const data = 'Hello, world!';

            writeFileSync(filename, data, { encoding: 'utf-8' });

            expect(readFileSync(filename)).toEqual(data);

            unlinkSync(filename);
        },
        TIMEOUT
    );

    it(
        'should read a file that does not end with a newline',
        () => {
            const filename = 'ending-newline.txt';
            const data = 'Hello, world!\n';

            writeFileSync(filename, data, { encoding: 'utf-8' });

            expect(readFileSync(filename)).toEqual(data);

            unlinkSync(filename);
        },
        TIMEOUT
    );

    it(
        'should read an empty file',
        () => {
            const filename = 'empty.txt';
            const data = '';

            writeFileSync(filename, data, { encoding: 'utf-8' });

            expect(readFileSync(filename)).toEqual(data);

            unlinkSync(filename);
        },
        TIMEOUT
    );

    it('should read a file with unicode characters', () => {
        const filename = 'empty.txt';
        const data = '🙂😇😗😝😛😎🥳🤩🥸😎➤℞❫]❪♔😽🙀';

        writeFileSync(filename, data, { encoding: 'utf-8' });

        expect(readFileSync(filename)).toEqual(data);

        unlinkSync(filename);
    }, TIMEOUT);

    it('should read a file with only newlines', () => {
        const filename = 'newlines.txt';
        const data = '\n'.repeat(10000);

        writeFileSync(filename, data, { encoding: 'utf-8' });

        expect(readFileSync(filename)).toEqual(data);

        unlinkSync(filename);
    }, TIMEOUT);

    it('should read a file with zeros', () => {
        const filename = 'newlines.txt';
        const data =
            'Hell\0oworld\0this\0\0\0\0\0\0\0\0\0\0\0\0\0\0 is amazing';

        writeFileSync(filename, data, { encoding: 'utf-8' });

        expect(readFileSync(filename)).toEqual(data);

        unlinkSync(filename);
    }, TIMEOUT);

    it('should read a large file', () => {
        const filename = 'newlines.txt';
        const data = new Uint8Array(20).fill(48);

        writeFileSync(filename, data, { encoding: 'utf-8' });

        expect(readFileSync(filename)).toEqual(
            Buffer.from(data).toString('utf-8')
        );

        unlinkSync(filename);
    }, TIMEOUT);
});
