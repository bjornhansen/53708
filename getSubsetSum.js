//  Get all subsets with a given sum.
const dp = [];
let resultArray = [];

function addToResults(v) {
    resultArray.push(v);
}

// Recursive function to print all subsets with the help of dp[][]. list p[] stores current subset.
function getSubsetsRecursively(arr, i, sum, p) {
    // If we reach the end and sum is non-zero.
    // Add p[] only if arr[0] is equal to sum OR dp[0][sum] is true.
    if (i === 0 && sum !== 0 && dp[0][sum] !== 0) {
        p.push(arr[i]);
        addToResults(p);
        return;
    }

    // If sum becomes 0.
    if (i == 0 && sum == 0) {
        addToResults(p);
        return;
    }

    // If given sum can be achieved after ignoring current element.
    if (dp[i - 1][sum]) {
        // Create a new list to store path.
        let b = [...p];
        getSubsetsRecursively(arr, i - 1, sum, b);
    }

    // If given sum can be achieved after considering current element.
    if (sum >= arr[i] && dp[i - 1][sum - arr[i]]) {
        p.push(arr[i]);
        getSubsetsRecursively(arr, i - 1, sum - arr[i], p);
    }
}

// Prints all subsets of arr[0..n-1] with sum 0.
function getAllSubsets(arr, n, sum) {
    if (n == 0 || sum < 0) {
        return;
    }

    // Sum 0 can always be achieved with 0 elements.
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            dp[i].push(false);
        }
    }
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }

    // Sum arr[0] can be achieved with single element.
    if (arr[0] <= sum) {
        dp[0][arr[0]] = true;
    }

    // Fill the rest of the entries in dp[][].
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (arr[i] <= j) {
                dp[i][j] = (dp[i - 1][j] || dp[i - 1][j - arr[i]]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    if (dp[n - 1][sum] == false) {
        return;
    }

    // Recursively traverse dp[][] to find all paths from dp[n-1][sum].
    let p = [];
    getSubsetsRecursively(arr, n - 1, sum, p);
}

export default function getSubsetSum(set, sum) {
    resultArray = [];
    getAllSubsets(set, set.length, sum);
    if (resultArray.length) {
        // Return the last subset because it generally contains fewer elements.
        return resultArray[resultArray.length - 1];
    } else {
        return [];
    }
}
