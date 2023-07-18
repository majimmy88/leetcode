var runningSum = function(nums) {
    let res = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        let total = nums[i] + res[i-1]
        res.push(total)  
    }
    return res
};
