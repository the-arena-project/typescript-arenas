import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const pathToDir = process.argv[2];

if (typeof pathToDir !== 'string') {
    process.stdout.write('Missing path to directory.\n');
    process.exit(1);
}

const listDir = (listedDir: string): void => {
    const outputLines = [] as string[];
    const dirs = [] as string[];

    const filenames = readdirSync(listedDir).sort((a, b) => a.localeCompare(b));

    let totalSize = 0;

    for (const filename of filenames) {
        const filepath = join(listedDir, filename);
        const stat = statSync(filepath);
        const isDir = stat.isDirectory();

        if (isDir) {
            dirs.push(filepath);
        }

        totalSize += stat.blocks;
        outputLines.push(`${String(isDir ? 'Directory' : 'File').padEnd(11)}${filename}`);
    }

    process.stdout.write(
        `${listedDir}:\ntotal ${totalSize}\n${outputLines.join('\n')}${
            outputLines.length > 0 ? '\n' : ''
        }`,
    );

    for (const dir of dirs) {
        process.stdout.write('\n');
        listDir(dir);
    }
};

try {
    listDir(pathToDir);
} catch (error) {
    process.stderr.write(`Error: ${pathToDir} is not a valid directory\n`);
    process.exit(1);
}
