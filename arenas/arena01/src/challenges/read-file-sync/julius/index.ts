import { readSync, openSync, closeSync } from 'fs';

type ReadFileSyncFn = (path: string) => string;

const BUFFER_SIZE = 1024;

export const readFileSync: ReadFileSyncFn = (path) => {
    let buffer = Buffer.from('');
    const fd = openSync(path, 'r');
    const tmpBuf = new Uint8Array(BUFFER_SIZE);
    let n = 0;

    while ((n = readSync(fd, tmpBuf, { length: 1024 })) > 0) {
        buffer = Buffer.concat([buffer, tmpBuf.slice(0, n)]);
    }

    closeSync(fd);

    return buffer.toString('utf-8');
};
