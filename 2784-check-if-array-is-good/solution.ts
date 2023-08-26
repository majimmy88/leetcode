function isGood(nums: number[]): boolean {
    const sorted = nums.sort((a,b)=>a-b)
    // baseN has length of highest element + 1
    // n appears twice
    // everything else once
    const baseN = sorted[nums.length -1] + 1
    if(sorted.length !== baseN) {
        return false
    }
    for(let i = 1; i < baseN; i++) {
        if(i !== sorted[i - 1]) {
            return false
        }
    }
    return true
};
