import { Command } from 'commander';

export const init = new Command()
    .name('init')
    .description('Initialize a new project')
    .action(async () => {
        console.log('Initializing a new project...');
    });
