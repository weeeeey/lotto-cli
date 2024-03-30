import { Command } from 'commander';

export const init = new Command()
    .name('init')
    .description('Initialize a new project')
    .action(async () => {
        const result = Math.floor(Math.random() * 100 + 1);
        console.log(result);
    });
