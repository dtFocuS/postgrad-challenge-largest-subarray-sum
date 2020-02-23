function largestSubarraySum(array){
    //Time Complexity is O(N) where N is the length of the array since there is only one for loop that iterates through every single element in the array
    //Space Complexity is O(1) which is constant because I didn't use any other data structure to solve this problem other than a couple of variables to hold the current sum and the max sum.
    if (!array || array.length === 0) {
        return 0;
    }
    let curSum = array[0];
    let maxSum = array[0];

    for (let i = 1; i < array.length; i++) {
        curSum = Math.max(array[i], curSum + array[i]);
        if (curSum < 0) {
            curSum = 0;
        }
        maxSum = Math.max(maxSum, curSum);
    }

    return maxSum;

}