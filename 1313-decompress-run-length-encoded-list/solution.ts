function decompressRLElist(nums: number[]): number[] {
    const result: number[] = []
    for(let i = 0; i < nums.length; i+=2) {
        let freq = nums[i]
        let val = nums[i+1]
        result.push(...Array(freq).fill(val))
    }
    return result
};
