function shuffle(nums: number[], n: number): number[] {
    let result: number[] = []
    let first: number[] = nums.slice(0, n)
    let second: number[] = nums.slice(n)
    for(let i = 0; i < n; i++) {
        result.push(first[i])
        result.push(second[i])
    }
    return result

};
