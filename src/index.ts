#!/usr/bin/env node

import { Command } from 'commander';
// import { getPackageInfo } from './utils/get-package.js';
import { init } from './commander/init.js';

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

async function main() {
    // const packageInfo = await getPackageInfo();

    const program = new Command()
        .name('zero-cli')
        .version(
            '1.0.0',
            '-v,--version',
            'display the current version of the CLI'
        )
        .description('An example CLI for managing a directory')
        .option('-l, --ls  [value]', 'List directory contents')
        .option('-m, --mkdir <value>', 'Create a directory')
        .option('-t, --touch <value>', 'Create a file')
        .parse(process.argv);

    program.addCommand(init);

    program.parse();
}

main();
