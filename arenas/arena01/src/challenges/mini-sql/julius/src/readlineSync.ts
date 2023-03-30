import {readSync} from "fs";

interface ReadState {
    buffer: Buffer;
    filledLength: number;
}

const BUFFER_SIZE = 4096;
const fdToBufs: Record<number, ReadState> = {

}

const readlineSync = (fd: number): string | null => {
    if (typeof fdToBufs[fd] === 'undefined') {
        fdToBufs[fd] = { buffer: Buffer.alloc(BUFFER_SIZE), filledLength: 0 };
    }

    let { buffer, filledLength } = fdToBufs[fd];
    let line = Buffer.from(buffer);
    let newlineIndex = -1;
    let bytesRead = 0;
    const readBuf = Buffer.alloc(BUFFER_SIZE);

    while ((bytesRead = readSync(fd, readBuf, 0, BUFFER_SIZE, null)) > 0) {
        newlineIndex = readBuf.indexOf('\n');

        if (newlineIndex !== -1) {
            break ;
        }

        line = Buffer.concat([line, buffer]);
    }

    if (newlineIndex !== -1) {
        const tmp = Buffer.alloc(BUFFER_SIZE);

        readBuf.copy(tmp, 0, 0 , newlineIndex);
        readBuf.copy(fdToBufs[fd].buffer, 0, newlineIndex, bytesRead - newlineIndex);
        fdToBufs[fd].filledLength = bytesRead - newlineIndex;

        return Buffer.concat([line, tmp]).toString('utf-8');
    }

    return line.toString('utf-8');
}
