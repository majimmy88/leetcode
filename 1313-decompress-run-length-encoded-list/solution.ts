function decompressRLElist(nums: number[]): number[] {
    const result: number[] = []

    for(let i = 0; i < nums.length; i+=2) {
        let freq = nums[i]
        let val = nums[i+1]
        while(freq > 0) {
            result.push(val)
            freq--
        }
    }
    return result
};
