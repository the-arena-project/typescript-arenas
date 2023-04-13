import { commandExecutor } from '../command-executor';

commandExecutor.register('help', () => {
    const commands = commandExecutor.getCommands();

    process.stdout.write(`${commands.join('\n')}\n`);
});
