function largestSubarraySum(array){

    if (!array || array.length === 0) {
        return 0;
    }
    let curSum = array[0];
    let maxSum = array[0];

    for (let i = 1; i < array.length; i++) {
        curSum = Math.max(array[i], curSum + array[i]);
        maxSum = Math.max(maxSum, curSum);
    }

    return maxSum >= 0 ? maxSum : 0;

}