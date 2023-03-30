import { readdirSync, statSync } from "fs";
import { join } from "path";

const pathToDir = process.argv[2];

if (typeof pathToDir !== 'string') {
    process.stdout.write('Missing path to directory.\n');
    process.exit(1);
}

try {
    const outputLines = [] as string[];
    const filenames = readdirSync(pathToDir).sort((a, b) => a.localeCompare(b));
    let totalSize = 0;

    for (const filename of filenames) {
        const filepath = join(pathToDir, filename);
        const stat = statSync(filepath);
        const isDir = stat.isDirectory();

        totalSize += stat.blocks;

        outputLines.push(`${String(isDir ? 'Directory' : 'File').padEnd(11)}${filename}`)
    }

    process.stdout.write(`total ${totalSize}\n${outputLines.join('\n')}\n`);

} catch (error) {
    process.stderr.write(`Error: ${pathToDir} is not a valid directory\n`);
    process.exit(-1);
}
