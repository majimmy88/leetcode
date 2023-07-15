var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            for(let j = 1; j <= k && j < nums.length; j++) {
                if(set.has(nums[j])){
                    return true
                }                
                set.add(nums[j])
            } 
        } else {
            set.delete(nums[i])
            if(i + k < nums.length && k > 0) {
                if(set.has(nums[i + k])){
                    return true
                }
                set.add(nums[i + k])
            }
        }
        if(set.has(nums[i])){
            return true
        }
    }
    return false

    // for(let i = 0; i < nums.length; i++) {
    //     const set = new Set();
    //     for(let j = i + 1; j <= i + k && j < nums.length; j++) {
    //         set.add(nums[j])
    //     }
    //     if(set.has(nums[i])){
    //         return true
    //     }
    // }
    // return false
};
