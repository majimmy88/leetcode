var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        let diff = target - curr
        let nextIndex = nums.indexOf(diff)
        if(nextIndex !== -1 && nextIndex !== i) {
            return [i,nextIndex]
        }
    }
    return []
};
