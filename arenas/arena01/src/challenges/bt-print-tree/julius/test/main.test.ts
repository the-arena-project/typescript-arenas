import { spawn } from 'child_process';
import { join } from 'path';

const spawnTestingProcess = async (s: string) => new Promise((resolve) => {
    const process = spawn('ts-node', [join(__dirname, 'execute'), s]);
    let out = '';

    process.stdout.on('data', (data) => out += data);

    process.on('close', () => {
        resolve(out);
    })
});

describe('printTree', () => {
    it('Should print multiple trees', async () => {
        const testValues = [
            {
                value: '1,2,3,4,5,6,7,8',
                output: `4
|___6
|   |___7
|   |   |___8
|   |___5
|___2
|   |___3
|   |___1`,
            },
            {
                value: '42,21,22,23,72,43567,12345,13245,-123,-3245,2435',
                output: `42
|___12345
|   |___43567
|   |   |___13245
|   |___72
|   |   |___2435
|___22
|   |___23
|   |___-123
|   |   |___21
|   |   |___-3245`,
            },
        ];
        await Promise.all(testValues.map(async (testValue) => {
            const stdout = await spawnTestingProcess(testValue.value);
            expect(stdout).toEqual(`${testValue.output}\n`);
        }))
    });
});
