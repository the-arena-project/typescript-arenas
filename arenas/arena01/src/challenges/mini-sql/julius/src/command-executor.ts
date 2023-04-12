export type CommandHandler = (args: string[]) => void;

class CommandExecutor {
    private readonly commandHandlers: Record<string, CommandHandler> = {};

    private doesCommandExist(command: string): boolean {
        return typeof this.commandHandlers[command.toLowerCase()] !== 'undefined';
    }

    getCommands(): string[] {
        return Object.keys(this.commandHandlers);
    }

    public register(command: string, handler: CommandHandler) {
        this.commandHandlers[command.toLowerCase()] = handler;
    }

    public execute(command: string, args: string[]): void | Promise<void> {
        if (!this.doesCommandExist(command)) {
            console.error(`Command not found: ${command}`);

            return;
        }

        return this.commandHandlers[command.toLowerCase()](args);
    }
}

export const commandExecutor = new CommandExecutor();

import './commands';
