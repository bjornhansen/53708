# CTA Gaavo fare change calculator
Take-home project for Nickels software engineer position. This project uses **Node.js** and two CLI-related dependencies: [inquirer](https://www.npmjs.com/package/inquirer) and [chalk](https://www.npmjs.com/package/chalk).

There are three JavaScript files:
1. `index.js` has the logic and tools used for the CLI.
2. `getSubsetSum.js` has the algorithm for solving the problem.
3. `tests.js` has the tests for the core algorithm.

## Instructions
1. Clone this repo to a machine running Node.js version 19+.
2. Open a terminal and navigate to the repo's root directory.
3. Install dependencies with npm.
4. Run `node index.js` and answer the CLI's questions as described in the project prompt below.
5. Optionally, run `node tests.js` to run the tests for the algorithm.

## My experience with this project
I'd never written a CLI before, so this was a first! Getting started required some research, but that part was straightforward to set up.

My first attempt at solving the core algorithm was a naive, brute force approach. I thought finding all possible number combinations that summed to the fare, then comparing each to the set until one matched was a potential solution. I started on this, but I was concerned about running out of time and suspected there was a more efficient solution. I decided to research this type of problem and found it was a variation of the [subset sum problem](https://en.wikipedia.org/wiki/Subset_sum_problem), which is apparently a common one in the computer science world. I learned there are a number of ways to solve this problem, one of the more efficient is with a dynamic programming approach. Since I don't have experience solving dynamic programming problems, I ended up copying a solution of the [perfect sum problem](https://www.geeksforgeeks.org/perfect-sum-problem-print-subsets-given-sum/) and modifying it to work with this CTA problem.

I realize this is a "standing on the shoulders of giants" approach and may not be what you're looking for. Without a background in computer science, I haven't yet learned the patterns required to solve this kind of problem effectively. That being said, I'm currently (as of 3/23) taking an algorithms and data structures course and plan to be much more knowledgeable in 2-3 months.

### Breakdown of time spent
- ~90 minutes: researching and implementing Node.js CLI for prompts, input validation, and displaying output.
- ~30 minutes: attempting to write a brute force solution.
- ~75 minutes: researching problem, learning about subset sum problem, modifying a copied solution to work for this project.
- ~30 minutes: writing tests for the algorithm, writing readme.md, playing around with the finished CLI.

**Total**: ~3.75 hours

## Given prompt
### CTA Ride Fare Utility

The year is 2024, and you are visiting Calbia, a friendly new country located in Eastern Europe. Although popular with tourists, financial transactions can be daunting for newcomers: the local currency, the Gaavo, comes in many different denominations. For example, coins worth 11 Gaavo (11G) are often used to buy pouches of fresh juice, while a 23G bill or a few 7G pieces might be enough for a bowl of Calbian stew.

The Calbian Transportation Authority (CTA) has asked you to help solve a problem that has been exacerbated by the recent surge in tourism. The problem is that passengers at bus, train, and other transit stations are missing their rides because they are failing to come up with the correct change for fare. The CTA requires all riders to offer the exact fare amount.

To solve this problem, you'll create an application that allows riders to enter two pieces of information from the command-line: the fare amount they're trying to make and all of the Gaavo pieces they have. Don’t make any assumptions about what currency denominations exist or don’t exist; just let the riders input what they have. Based on that info, your app will either tell them the exact combination of Gaavo pieces that will match the fare, or that there is no possible combination that will work.

### Here are some examples:

- When the fare is 7G, and you've got 1G, 4G, and 6G, you can make the fare using 1G and 6G.
- When the fare is 8G, and you've got 1G, 4G, and 6G, you cannot make the fare.
- When the fare is 57G, and you've got 6G, 13G, 13G, 21G, 23G, and 24G, you can make the fare using 23G, 21G, and 13G.

### Where do you start?

We recommend first selecting a language and set of tools to work with. There are several aspects of this challenge (the algorithm, a CLI, tests, documentation), and we recommend you don’t get stuck trying to optimize any one part. Our goal is to get you working on something challenging, and then later to discuss the pros and cons of the method.

Please upload your solution to GitHub with instructions for running.

Here’s what we’ll be assessing:

1. Functionality (Does your app solve the CTA rider problem? Is the code well-tested?)
2. Readability (Is your code easy for us to understand?)
3. Performance (Is your solution efficient, in terms of time and space complexity?)