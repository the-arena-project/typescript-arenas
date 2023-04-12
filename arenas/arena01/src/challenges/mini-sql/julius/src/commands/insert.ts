import { commandExecutor } from '../command-executor';
import { dumbDb } from '../db/dumb-db';

commandExecutor.register('insert', ([username]) => {
    if (typeof username === 'undefined') {
        console.error(`Not a valid username: "${username ?? ''}"`);

        return;
    }

    const { id } = dumbDb.insert(username);

    console.log(`added: id=${id}, username=${username}`);
});
