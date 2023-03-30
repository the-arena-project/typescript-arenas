import { readFileSync, unlinkSync, write } from "fs";
import { writeFileSync } from "../index";

const readFileAsString = (path: string) => readFileSync(path).toString();

describe('writeFileSync', () => {
    it('should write a string without a newline to a file on the filesystem', () => {
        const filename = 'without-a-newline.txt';
        const data = 'Hello, world!';

        writeFileSync(filename, Buffer.from(data));

        expect(readFileAsString(filename)).toEqual(data);

        unlinkSync(filename);
    });

    it('should write a string with a newline to a file on the filesystem', () => {
        const filename = 'with-a-newline.txt';
        const data = 'Hello, world!\n';

        writeFileSync(filename, Buffer.from(data));

        expect(readFileAsString(filename)).toEqual(data);

        unlinkSync(filename);
    });

    it('should write a string with unicode characters to a file on the filesystem', () => {
        const filename = 'with-unicode.txt';
        const data = '🤖👻💀☠️🤡🎃😿😽⊊∇∇TSRQ₵௹﷼₱¢£';

        writeFileSync(filename, Buffer.from(data));

        expect(readFileAsString(filename)).toEqual(data);

        unlinkSync(filename);
    });

    it('should write a very long string to a file on the filesystem', () => {
        const filename = 'large-string.txt';
        const data = 'The Arena Project\n'.repeat(100000);

        writeFileSync(filename, Buffer.from(data));

        expect(readFileAsString(filename)).toEqual(data);

        unlinkSync(filename);

    });

    it('should write a string that contains null bytes to a file on the filesystem', () => {
        const filename = 'with-null-bytes.txt';
        const data = 'Hello world \0 This string contains\0\0 null bytes.';

        writeFileSync(filename, Buffer.from(data));

        expect(readFileAsString(filename)).toEqual(data);

        unlinkSync(filename);
    });

    it('should write an empty string to a file on the filesystem', () => {
        const filename = 'empty.txt';
        const data = '';

        writeFileSync(filename, Buffer.from(data));

        expect(readFileAsString(filename)).toEqual(data);

        unlinkSync(filename);
    });
})
