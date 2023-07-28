var buildArray = function(nums) {
    // const result = new Array(nums.length)
    // for(let i = 0; i < nums.length; i++) {
    //     result[i] = nums[nums[i]]
    // }
    // return result

    return nums.map(num => nums[num])
};
