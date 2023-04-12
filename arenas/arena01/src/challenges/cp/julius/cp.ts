import { openSync, readSync, statSync, writeSync } from 'fs';
import { basename, join } from 'path';

const BUFFER_SIZE = 4096;

const src = process.argv[2];
const dst = process.argv[3];

try {
    const srcStat = statSync(src);

    if (srcStat.isDirectory()) {
        process.exit(1);
    }
} catch (error) {
    process.exit(1);
}

let isDstDir = false;

try {
    const dstStat = statSync(dst);

    isDstDir = dstStat.isDirectory();
} catch (error) {
    /* if it does not exist we don't really care, we only need to know that dst is not a directory. */
}

const dstFilePath = isDstDir ? join(dst, basename(src)) : dst;

const tmpBuf = new Uint8Array(BUFFER_SIZE);
let bytesRead = 0;

const srcFd = openSync(src, 'r');
const dstFd = openSync(dstFilePath, 'w');

while ((bytesRead = readSync(srcFd, tmpBuf, { length: BUFFER_SIZE })) > 0) {
    writeSync(dstFd, Buffer.from(tmpBuf), 0, bytesRead);
}
