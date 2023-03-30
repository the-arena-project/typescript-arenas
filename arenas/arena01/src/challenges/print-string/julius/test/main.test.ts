import { spawn } from 'child_process';
;
import { join } from 'path';

const spawnTestingProcess = async (s: string) => new Promise((resolve) => {
    const process = spawn('ts-node', [join(__dirname, 'execute'), s]);
    let out = '';

    process.stdout.on('data', (data) => out += data);

    process.on('close', () => {
        resolve(out);
    })
});


describe('printString', () => {
    it('should print the string passed as an argument on stdout, with a newline added at the end', async () => {
        const testValues = [
            'Hello',
            'Hello, world!',
            '',
            '@$@!##$%#$^%3%$^$',
            '                            ',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(100)
        ];

        await Promise.all(testValues.map(async (testValue) => {
            const stdout = await spawnTestingProcess(testValue);

            expect(stdout).toEqual(`${testValue}\n`);
        }))
    })
})
