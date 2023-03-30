import { spawn } from 'child_process';
;
import { join } from 'path';



const spawnTestingProcess = async (n: number) => new Promise((resolve) => {
    const process = spawn('ts-node', [join(__dirname, 'execute'), String(n)]);
    let out = '';

    process.stdout.on('data', (data) => {
        out += data
    });

    process.on('close', () => {
        resolve(out);
    })
});
describe('printNumber', () => {
    it('shouls print the passed number on stdout, without a newline at the end', async () => {
        const testValues = [-42, 42, 21, -21, 0, 2, 1, 213456, 13243546, 134243, 123.2132, 3.14, 23,2, 10e10, 10e-10];

        await Promise.all(testValues.map(async (testValue) => {
            const stdout = await spawnTestingProcess(testValue);

            expect(stdout).toEqual(`${testValue}`);
        }))
    })
})