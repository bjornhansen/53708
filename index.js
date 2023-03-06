import inquirer from 'inquirer';
import chalk from 'chalk';
import getSubsetSum from "./getSubsetSum.js";

inquirer
    .prompt([
        {
            name: 'fare',
            type: 'input',
            message: 'Enter fare in Gaavos:',
            validate: function( value ) {
                const parsedValue = Number(value);
                if (Number.isInteger(parsedValue) && parsedValue >= 1) {
                    return true;
                } else {
                    return 'Please enter a fare. A fare must be a positive integer.';
                }
            }
        },
        {
            name: 'pieces',
            type: 'input',
            message: 'Enter each Gaavo piece you have separated by spaces:',
            validate: function(value) {
                const parsedValues = value.split(' ').map(e => Number(e));
                const validatedValues = parsedValues.filter(e => Number.isInteger(e) && e >= 1);
                if (parsedValues.length === validatedValues.length) {
                    return true;
                } else {
                    return 'Please enter at least one Gaavo piece. Each piece must be a positive integer.';
                }
            }
        }
    ])
    .then((answers) => {
        const fare = parseInt(answers.fare);
        const pieces = answers.pieces.split(' ').map(e => Number(e));
        const result = getSubsetSum(pieces, fare);
        if (result.length > 0) {
            console.log(chalk.green.bold(`Yes`) + chalk.bold(` you have the correct change for the fare! Use these Gaavo pieces:`));
            console.log(chalk.bold(result.join(', ')));
        } else {
            console.log(chalk.red.bold(`No`) + chalk.bold(` you don't have the correct change for the fare with your current Gaavo pieces.`));
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(chalk.red.bold(`Prompt couldn't be rendered in the current environment`));
        } else {
            console.log(chalk.red.bold(`Sorry, something went wrong.`));
        }
    });