import chalk from 'chalk';

export function showTitle(msg) {
    console.log(chalk.bold.green(msg));
}

export function space() {
    console.log('');
}