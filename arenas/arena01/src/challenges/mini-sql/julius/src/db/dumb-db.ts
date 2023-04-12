import { appendFileSync, existsSync, readFileSync } from 'fs';

export class DumbDb {
    private readonly idToUsername: Record<number, string> = {};
    private readonly usernameToIds: Record<string, number[]> = {};
    private currentId: number;

    constructor(private readonly pathToDbFile: string) {
        this.currentId = 0;

        if (existsSync(pathToDbFile)) {
            const entries = readFileSync(pathToDbFile).toString().split('\n').slice(0, -1);

            this.currentId = entries.length;
            for (const entry of entries) {
                const [id, ...rest] = entry.split(' ');
                const numId = +id;
                const username = rest.join('');

                this.idToUsername[numId] = username;

                if (typeof this.usernameToIds[username] === 'undefined') {
                    this.usernameToIds[username] = [numId];
                } else {
                    this.usernameToIds[username].push(numId);
                }
            }
        }
    }

    insert(username: string): { id: number; username: string } {
        const newId = ++this.currentId;

        appendFileSync(this.pathToDbFile, `${this.currentId} ${username}\n`);
        if (typeof this.usernameToIds[username] === 'undefined') {
            this.usernameToIds[username] = [newId];
        } else {
            this.usernameToIds[username].push(newId);
        }

        return { id: newId, username };
    }

    select(username: string): number[] {
        return this.usernameToIds[username];
    }
}

export const dumbDb = new DumbDb('db.minisql');
