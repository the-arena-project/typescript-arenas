import { fstatSync, openSync, readSync, writeSync } from 'fs';

export class RowFile {
    private BUFFER_SIZE = 4096;
    private readonly fd: number = -1;
    private relativeOffset = 0;
    private absoluteOffset = 0;

    constructor(path: string) {
        this.fd = openSync(path, 'w+');

        const st = fstatSync(this.fd);

        this.absoluteOffset = st.size;
    }

    getAt(offset: number): string | undefined {
        const buf = Buffer.alloc(this.BUFFER_SIZE);

        while (readSync(this.fd, buf, 0, this.BUFFER_SIZE, offset) > 0) {
            const newlineIdx = buf.indexOf('\n');

            if (newlineIdx !== -1) {
                return buf.toString('utf-8').slice(0, newlineIdx);
            }
        }

        return undefined;
    }

    addRow(id: number, data: string): number {
        const absoluteOffset = this.absoluteOffset;

        const lineToAppend = Buffer.from(`id=${id},data=${data}\n`);

        writeSync(this.fd, lineToAppend, 0, lineToAppend.length, this.absoluteOffset);

        this.relativeOffset += lineToAppend.length;
        this.absoluteOffset += lineToAppend.length;

        return absoluteOffset;
    }

    getAbsoluteOffset(): number {
        return this.absoluteOffset;
    }
}
