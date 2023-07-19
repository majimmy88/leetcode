var leftRightDifference = function(nums) {
    const result = [];
    let leftTotal = 0; rightTotal = 0;
    for(const num of nums) {
        result.push(leftTotal)
        leftTotal += num
    }
    for(let i = nums.length -1; i >= 0; i--) {
        result[i] = Math.abs(result[i] - rightTotal)
        rightTotal += nums[i]
    }
    return result;
};
