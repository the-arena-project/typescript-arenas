import { spawn } from 'child_process';
import { join } from 'path';

/*
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
*/

const spawnTestingProcess = async (n: number) => new Promise((resolve, reject) => {
    const process = spawn('ts-node', [join(__dirname, 'execute'), `${n}`]);
    let out = '';
    let err = '';

    process.stdout.on('data', (data) => out += data);

    process.stderr.on('data', (data) => {
        err += data;
    });

    process.on('error', (error) => {
        reject(error);
    });

    process.on('close', () => {
        if (err) {
            return reject(err);
        }

        resolve(out);
    })
});


describe('printNumber', () => {
    it('shouls print the passed number on stdout, without a newline at the end', async () => {
        const testValues = [-42, 42, 21, -21, 1, 213456, 13243546];

        await Promise.all(testValues.map(async (testValue) => {
            const stdout = await spawnTestingProcess(testValue);

            expect(stdout).toEqual(`${testValue}`);
        }))
    })
})
