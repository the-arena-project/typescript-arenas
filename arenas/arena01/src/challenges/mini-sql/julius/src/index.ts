import {commandExecutor} from "./command-executor";

const main = async () => {
    const prompt = 'miniSQL$ ';
    let pushBackBuffer = Buffer.from([]);

    process.stdout.write(prompt);
    process.stdin.on('data', async (data) => {
        let newlineIndex = -1;
        let buffer = Buffer.concat([pushBackBuffer, data]);

        while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
            const tmp = Buffer.alloc(newlineIndex);

            buffer.copy(tmp, 0, 0, newlineIndex );

            const line = tmp.toString('utf-8');
            const [command, ...args] = parseCommandLine(line);

            await commandExecutor.execute(command, args);

            const remainingLength = buffer.byteLength - newlineIndex - 1;

            if (remainingLength > 0) {
                const updated = Buffer.alloc(remainingLength);

                buffer.copy(updated, 0, newlineIndex + 1);
                buffer = updated;
            } else {
                buffer = Buffer.from([]);
            }
        }

        pushBackBuffer = buffer;

        process.stdout.write(prompt);
    })
}

const parseCommandLine = (commandLine: string): string[] => {
    const args: string[] = [];
    let quote: 'simple' | 'double' | null = null;
    let baseIndex = 0;

    for (let i = 0; i < commandLine.length; ++i) {
        let c = commandLine[i];

        if (!quote && c === ' ') {
            args.push(commandLine.slice(baseIndex, i));
            while ((c = commandLine[++i]) === ' ') {}
            baseIndex = i;
        }
        if (c === '"') {
            quote = quote === 'double' ? null : 'double';
        }
        else if (c === '\'') {
            quote = quote === 'simple' ? null : 'simple';
        }
    }

    args.push(commandLine.slice(baseIndex, commandLine.length));

    // remove actual quotes from the argument //
    for (let i = 0; i !== args.length; ++i) {
        const arg = args[i];
        const first = arg[0];
        const last = arg[arg.length - 1];

        if (first === last && '"\''.includes(first)) {
            args[i] = arg.slice(1, -1);
        }
    }

    return args;
}

main();
