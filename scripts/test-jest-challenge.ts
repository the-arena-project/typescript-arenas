import { join } from 'path';
import { statSync } from 'fs';
import execa from 'execa';

const printUsage = () => {
    console.log('Usage: npm run test <arenaId> [<challengeId>]');
};

const getRootDirPath = (arenaId: string, challengeId?: string) => {
    if (challengeId) {
        return join(__dirname, '..', 'arenas', arenaId, 'src', 'challenges', challengeId);
    }

    return join(__dirname, '..', 'arenas', arenaId);
};

const printEonentError = (arenaId: string, challengeId?: string) => {
    console.log(`Specified arenaId or challengeId is not a directory.`);
    console.log(`arenaId: ${arenaId}`);
    console.log(`challengeId: ${challengeId ?? 'none'}`);
};

export const main = async () => {
    const [arenaId, challengeId] = process.argv.slice(2);

    if (!arenaId) {
        console.log('You must specify at least an arenaId');
        printUsage();
        return;
    }

    const rootDirPath = getRootDirPath(arenaId, challengeId);

    try {
        const dirStat = statSync(rootDirPath);

        if (!dirStat.isDirectory()) {
            printEonentError(arenaId, challengeId);
            return;
        }
    } catch {
        printEonentError(arenaId, challengeId);
        return;
    }

    try {
        await execa('jest', ['--rootDir', rootDirPath], {
            stdio: 'inherit',
        });
    } catch (error) {
        process.exit(1);
    }
};

main();
