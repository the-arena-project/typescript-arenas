import { createInterface } from 'readline';

export class Prompt {
    private readonly rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    constructor(prefix = '$ ') {
        this.rl.setPrompt(prefix);
    }

    public async getLine(): Promise<string> {
        this.rl.removeAllListeners();
        this.rl.prompt();

        return new Promise(resolve => {
            this.rl.on('line', (line) => {
                resolve(line);
            })
        })
    }

    public destroy() {
        this.rl.close();
    }
}
