import { existsSync, fstatSync, openSync, readFileSync, writeSync } from 'fs';

export class IndexFile {
    private readonly fd;
    private absoluteOffset = 0;
    private loadedEntries: Record<number, number> = {};

    constructor(path: string) {
        const didExist = existsSync(path);

        this.fd = openSync(path, didExist ? 'r+' : 'w+');

        const { size } = fstatSync(this.fd);

        this.absoluteOffset = size;

        const content = readFileSync(path);

        for (const line of content.toString().split('\n')) {
            const [id, offset] = line.split(' ').map((n) => +n);

            this.loadedEntries[id] = offset;
        }

        console.log(this.loadedEntries);
    }

    index(id: number, offset: number) {
        this.loadedEntries[id] = offset;

        const lineToAppend = Buffer.from(`${id} ${offset}\n`);

        writeSync(this.fd, lineToAppend, 0, lineToAppend.length, this.absoluteOffset);

        this.absoluteOffset += lineToAppend.length;
    }
}
