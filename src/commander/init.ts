import { Command } from 'commander';

export const init = new Command()
    .name('init')
    .description('Initialize a new project')
    .action(async () => {
        const result: number[] = [];
        while (result.length < 7) {
            const num = Math.floor(Math.random() * 45 + 1);
            if (!result.includes(num)) {
                result.push(num);
            }
        }
        console.log(result.slice(0, 6).join(', '), `,+${result[6]}`);
    });
