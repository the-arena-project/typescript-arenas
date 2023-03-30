import {commandExecutor} from "../command-executor";
import {dumbDb} from "../db/dumb-db";

commandExecutor.register('select', ([username]) => {
    const ids = dumbDb.select(username) ?? [];

    process.stdout.write(
        `found ${ids.length} entries:\n${ids.map((id) => `-> id=${id}, username=${username}`).join('\n')}${ids.length ? '\n' : ''}`
    );
})
