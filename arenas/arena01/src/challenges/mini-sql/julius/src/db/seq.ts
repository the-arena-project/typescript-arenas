import { existsSync, openSync, readSync, writeSync} from "fs";

export class Seq {
    private MAX_BUFFER = 16;
    private readonly fd;
    private index = 0;

    constructor(seqFile: string) {
        const didExist = existsSync(seqFile);

        this.fd = openSync(seqFile, didExist ? 'r+' : 'w+');

        if (!didExist) {
            writeSync(this.fd, Buffer.from('0'), 0, 1, 0);
        } else {
            const buf = Buffer.alloc(this.MAX_BUFFER);

            const bytesRead = readSync(this.fd, buf, 0, this.MAX_BUFFER, 0);

            this.index = parseInt(buf.toString().slice(0, bytesRead), 10);
        }

        console.log(this.index);
    }

    public increment(): number {
        ++this.index;

        const indexAsString = `${this.index}`;

        writeSync(this.fd, Buffer.from(indexAsString), 0, indexAsString.length, 0);

        return this.index;
    }
}
