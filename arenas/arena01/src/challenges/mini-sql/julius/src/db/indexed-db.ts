import {existsSync, mkdirSync, openSync, readdirSync, statSync} from "fs";
import { join } from 'path';
import {IndexFile} from "./index-file";
import {RowFile} from "./row-file";
import {Seq} from "./seq";

const PATH_TO_DB_FILES = join(process.cwd(), '.db');
const INDEX_FILE_EXTENSION = '.minisql';

export class IndexedDb {
    private indexFiles: Record<string, IndexFile> = {};
    private rowFiles: Record<string, RowFile> = {};
    private readonly seq: Seq;

    constructor() {

        if (existsSync(PATH_TO_DB_FILES)) {
            const st = statSync(PATH_TO_DB_FILES);

            if (!st.isDirectory()) {
                throw new Error(`${PATH_TO_DB_FILES} is a file, but should be a directory!`);
            }
        } else {
            mkdirSync(PATH_TO_DB_FILES);
        }

        this.seq = new Seq(join(PATH_TO_DB_FILES, 'username.seq.minisql'));
    }

    openIndexFile(name: string): IndexFile {
        const indexFilePath = join(PATH_TO_DB_FILES, `${name}.index.minisql`);

        if (typeof this.indexFiles[name] === 'undefined') {
            this.indexFiles[name] = new IndexFile(indexFilePath);
        }

        return this.indexFiles[name];
    }

    openRowFile(name: string): RowFile {
        const rowFilePath = join(PATH_TO_DB_FILES, `${name}.data.minisql`);

        if (typeof this.rowFiles[name] === 'undefined') {
            this.rowFiles[name] = new RowFile(rowFilePath);
        }

        return this.rowFiles[name];
    }

    insert(username: string) {
        const letter = username[0].toLowerCase();
        const rowFile = this.openRowFile(letter);
        const indexFile = this.openIndexFile(letter);
        const id = this.seq.increment();
        const insertedRowOffset = rowFile.addRow(id, username);

        indexFile.index(id, insertedRowOffset);

        console.log(`added: id=${id}, username=${username}`);
    }
}

export const indexedDb = new IndexedDb();
