function shuffle(nums: number[], n: number): number[] {
    const result: number[] = []
    const first: number[] = nums.slice(0, n)
    const second: number[] = nums.slice(n)
    for(let i = 0; i < n; i++) {
        result.push(first[i])
        result.push(second[i])
    }
    return result
};
