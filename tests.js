import chalk from 'chalk';
import getSubsetSum from "./getSubsetSum.js";

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

let set, sum, expect, result;

set = [1, 1];
sum = 2;
expect = [1, 1];
result = getSubsetSum(set, sum);
console.log(`Simple example: ${arrayEquals(expect, result) ? chalk.green.bold('Pass') : chalk.red.bold('Fail')}`);

set = [4];
sum = 4;
expect = [4];
result = getSubsetSum(set, sum);
console.log(`Set with only one number: ${arrayEquals(expect, result) ? chalk.green.bold('Pass') : chalk.red.bold('Fail')}`);

set = [1, 4, 6];
sum = 7;
expect = [6, 1];
result = getSubsetSum(set, sum);
console.log(`Given example #1: ${arrayEquals(expect, result) ? chalk.green.bold('Pass') : chalk.red.bold('Fail')}`);

set = [1, 4, 6];
sum = 8;
expect = [];
result = getSubsetSum(set, sum);
console.log(`Given example #2: ${arrayEquals(expect, result) ? chalk.green.bold('Pass') : chalk.red.bold('Fail')}`);

set = [6, 13, 21, 23, 24];
sum = 57;
expect = [23, 21, 13];
result = getSubsetSum(set, sum);
console.log(`Given example #3: ${arrayEquals(expect, result) ? chalk.green.bold('Pass') : chalk.red.bold('Fail')}`);

set = [2, 3, 4, 5, 6, 7, 8, 9];
sum = 10;
expect = [8, 2];
result = getSubsetSum(set, sum);
console.log(`Set with many possible summable subsets: ${arrayEquals(expect, result) ? chalk.green.bold('Pass') : chalk.red.bold('Fail')}`);

set = [2, 3, 4, 80, 12, 90, 34, 15, 76, 11, 123];
sum = 101;
expect = [11, 76, 12, 2];
result = getSubsetSum(set, sum);
console.log(`Larger set: ${arrayEquals(expect, result) ? chalk.green.bold('Pass') : chalk.red.bold('Fail')}`);