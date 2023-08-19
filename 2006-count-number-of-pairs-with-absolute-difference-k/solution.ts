function countKDifference(nums: number[], k: number): number {
    let count: number = 0
    const map = new Map()
    for(const num of nums) {
        count += map.get(num - k) ?? 0;
        count += map.get(num + k) ?? 0;
        map.set(num, (map.get(num) ?? 0) + 1);      
    }
    return count
};
