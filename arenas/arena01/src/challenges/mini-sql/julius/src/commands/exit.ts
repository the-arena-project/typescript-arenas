import {commandExecutor} from "../command-executor";

commandExecutor.register('exit', ([exitCode]) => {
    let nb = 0;

    if (typeof exitCode !== 'undefined') {
        nb = parseInt(exitCode, 10);

        if (isNaN(nb)) {
            console.error(`${nb} is not a valid exit code. It should be a valid number.`);

            return;
        }
    }

    process.exit(nb);
})
