import {commandExecutor} from "../command-executor";

commandExecutor.register('echo', (args) => {
    console.log(args.join(' '));
})
