function majorityElement(nums: number[]): number {
    let result:number = null
    const freqMap = {}
    for(const num of nums) {
        freqMap[num] ? freqMap[num]++ : freqMap[num] = 1
    }
    let max = -Infinity
    for(const key in freqMap) {
        if(freqMap[key] > max) {
            max = freqMap[key]
            result = parseInt(key)
        }
    }
    return result
};
